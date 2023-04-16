import calculateBodyFatPercentage from "./bodyFatFormula";
import { getBodyFat } from "./getBodyFatPercentage";
import { calculateCaloriesToLoseWeight } from "./getCaloriesPerDay";

const MILD = 'mild';
const RECOMMENDED = 'recommended';
const EXTREME = 'extreme';

const getMetrics = (bodyFatPercentage: any, gender: any, setting: any) => {
    let result, goal;
    if (bodyFatPercentage > 20) {
        result = 'cut';
        goal = gender === 'male' ? '10%' : '25%';
    } else {
        result = 'bulk';
        goal = gender === 'male' ? '20%' : '35%';
    }

    return { result, goal };
};

const getTargets = (data: any, setting: any) => {
    let kcalPerDay = 0, weightLostPerWeek = 0;

    switch (setting) {
        case MILD:
            weightLostPerWeek = 0.25;
            kcalPerDay = calculateCaloriesToLoseWeight(data, setting);
            break;
        case RECOMMENDED:
            weightLostPerWeek = 0.5;
            kcalPerDay = calculateCaloriesToLoseWeight(data, setting);
            break;
        case EXTREME:
            weightLostPerWeek = 1;
            kcalPerDay = calculateCaloriesToLoseWeight(data, setting);
            break;
        default:
            break;
    }

    return { kcalPerDay, weightLostPerWeek };
}

const generateMetrics = (data: any, setting: any) => {
    const bodyFatPercentage = getBodyFat(data);
    const { goal } = getMetrics(bodyFatPercentage, data.gender, setting);
    const { kcalPerDay, weightLostPerWeek } = getTargets(data, setting);

    return [{
        title: 'Body Fat Percentage',
        metric: `${bodyFatPercentage}%`,
        metricPrev: `Goal: ${goal}`
    },
    {
        title: 'Target Kcal per day',
        metric: `${kcalPerDay} kcal`,
        metricPrev: `~${weightLostPerWeek}kg per week`
    },
    {
        title: 'Target Weight date',
        metric: '25/12',
    }]
}

const shouldCut = (data: any) => {
    const { bodyFatPercentage } = calculateBodyFatPercentage(data);
    const { result } = getMetrics(bodyFatPercentage, data.gender, 'recommended');

    return result === 'cut';
}

export const getResultsFormattedData = (data: any) => {
    return {
        CUT: shouldCut(data),
        BODY_FAT: getBodyFat(data),
        MILD: {
            metrics: generateMetrics(data, MILD),
            bodyComposition: []
        },
        RECOMMENDED: {
            metrics: generateMetrics(data, RECOMMENDED),
            bodyComposition: []
        },
        EXTREME: {
            metrics: generateMetrics(data, EXTREME),
            bodyComposition: []
        }
    };
}