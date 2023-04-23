import calculateBodyFatPercentage from "./bodyFatFormula";
import { getWeightDates } from "./calculateWeightJourney";
import generateBodyFatResults from "./calculatorResultsGenerator";
import { convertLastDate, getDaySuffix } from "./dateFormatter";
import { getBodyFat } from "./getBodyFatPercentage";
import { calculateCaloriesToLoseWeight } from "./getCaloriesPerDay";
import { getTargetWeight } from "./getTargetWeight";

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

const getTargets = (data: any, setting: any, isOnCut: boolean) => {
    let kcalPerDay = 0, weightLostPerWeek = 0;

    switch (setting) {
        case MILD:
            weightLostPerWeek = 0.25;
            kcalPerDay = calculateCaloriesToLoseWeight(data, setting, isOnCut);
            break;
        case RECOMMENDED:
            weightLostPerWeek = 0.5;
            kcalPerDay = calculateCaloriesToLoseWeight(data, setting, isOnCut);
            break;
        case EXTREME:
            weightLostPerWeek = 1;
            kcalPerDay = calculateCaloriesToLoseWeight(data, setting, isOnCut);
            break;
        default:
            break;
    }

    return { kcalPerDay, weightLostPerWeek };
}

const generateMetrics = (data: any, setting: any) => {
    const bodyFatPercentage = getBodyFat(data);
    const { goal } = getMetrics(bodyFatPercentage, data.gender, setting);
    const { kcalPerDay, weightLostPerWeek } = getTargets(data, setting, bodyFatPercentage > 20);
    const weightDates = getWeightDates(bodyFatPercentage, data.weight, 75, setting);
    const lastDate = weightDates.slice(-1)[0].date;

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
        metric: convertLastDate(lastDate),
    }
    ]
};

const shouldCut = (data: any) => {
    const { bodyFatPercentage } = calculateBodyFatPercentage(data);
    const { result } = getMetrics(bodyFatPercentage, data.gender, 'recommended');
    return result === 'cut';
}

export const getResultsFormattedData = (data: any) => {
    const bodyFat = getBodyFat(data);

    return {
        CUT: shouldCut(data),
        BODY_FAT: bodyFat,
        MILD: {
            metrics: generateMetrics(data, MILD),
            weightDates: getWeightDates(bodyFat, data.weight, 75, MILD)
        },
        RECOMMENDED: {
            metrics: generateMetrics(data, RECOMMENDED),
            weightDates: getWeightDates(bodyFat, data.weight, 75, RECOMMENDED)
        },
        EXTREME: {
            metrics: generateMetrics(data, EXTREME),
            weightDates: getWeightDates(bodyFat, data.weight, 75, EXTREME)
        },
        BODY_COMPOSITION: generateBodyFatResults(data)
    };
}