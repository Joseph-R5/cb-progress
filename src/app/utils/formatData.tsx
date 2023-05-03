import { getWeightDates } from "./calculateWeightJourney";
import generateBodyFatResults from "./calculatorResultsGenerator";
import { convertLastDate } from "./dateFormatter";
import { getBodyFat } from "./getBodyFatPercentage";
import { calculateCaloriesToLoseWeight } from "./getCaloriesPerDay";

const MILD = 'mild';
const RECOMMENDED = 'recommended';
const EXTREME = 'extreme';

const getMetrics = (bodyFatPercentage: any, gender: any, setting: any) => {
    let result, goal;

    if (gender === 'male') {
      goal = bodyFatPercentage > 18 ? '10%' : '20%';
      result = goal === '20%' ? 'cut' : 'bulk';
    } else {
      goal = bodyFatPercentage > 25 ? '20%' : '35%';
      result = goal === '35%' ? 'cut' : 'bulk';
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
    const targetWeight = bodyFatPercentage < parseFloat(goal) ? data.weight + 5 : data.weight - 5;
    const weightDates = getWeightDates(bodyFatPercentage, data.weight, targetWeight, setting, data.gender);
    const lastDate = weightDates?.slice(-1)[0]?.date;

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

const shouldCut = (bodyFat: number, gender: 'male' | 'female') => {
    if (gender === 'male') {
        return bodyFat > 18
    }

    return bodyFat > 25;
}

export const getResultsFormattedData = (data: any) => {
    const bodyFat = getBodyFat(data);
    const { goal } = getMetrics(bodyFat, data.gender, MILD);
    const targetWeight = bodyFat < parseFloat(goal) ? data.weight + 5 : data.weight - 5;

    return {
        CUT: shouldCut(bodyFat, data.gender),
        BODY_FAT: bodyFat,
        MILD: {
            metrics: generateMetrics(data, MILD),
            weightDates: getWeightDates(bodyFat, data.weight, targetWeight, MILD, data.gender)
        },
        RECOMMENDED: {
            metrics: generateMetrics(data, RECOMMENDED),
            weightDates: getWeightDates(bodyFat, data.weight, targetWeight, RECOMMENDED, data.gender)
        },
        EXTREME: {
            metrics: generateMetrics(data, EXTREME),
            weightDates: getWeightDates(bodyFat, data.weight, targetWeight, EXTREME, data.gender)
        },
        BODY_COMPOSITION: generateBodyFatResults(data)
    };
}