import { BodyFatResults, IBodyFatMass } from "../types/bodyFatTypes";
import { UpdatedUserDetails } from "../types/pageProps";
import { getBodyFat } from "./getBodyFatPercentage";

const generateBodyFatResults = (results: UpdatedUserDetails): BodyFatResults => {
    const bodyFatPercentage = getBodyFat(results);
    const { weight, height, gender, neck, waist } = results;
    
    return {
        category: getCategory(bodyFatPercentage),
        bodyFatMass: calculateBodyFatMass(Number(weight), Number(height), gender, Number(neck), Number(waist)),
        leanBodyMass: calculateLeanBodyMass(Number(weight), bodyFatPercentage, gender),
        bmi: calculateBMI(Number(weight), Number(height))
    }
}

const getCategory = (percentage: number): string => {
    switch (true) {
        case percentage < 2:
            return "Essential";
        case percentage >= 2 && percentage <= 6:
            return "Athletic";
        case percentage > 6 && percentage <= 14:
            return "Athletic";
        case percentage > 14 && percentage <= 18:
            return "Fitness";
        case percentage > 18 && percentage <= 25:
            return "Average";
        default:
            return "Obese";
    }
};

const calculateBodyFatMass = (weight: number, height: number, gender: string, neckSize: number, waistSize: number, hipSize?: number): IBodyFatMass => {
    let bfa: number;
    let min, max: number;

    if (gender === 'male') {
        bfa = 64 - (20 * (height / waistSize))
        min = 6;
        max = 24;
    } else {
        bfa = 76 - (20 * (height / waistSize));
        min = 16;
        max = 30;
    }

    return {
        value: bfa,
        min,
        max,
        range: `Healthy range: ${min}% - ${max}%`
    };
};

const calculateLeanBodyMass = (weight: number, bodyFatPercentage: number, gender: string): IBodyFatMass => {
    const leanBodyMassPercentage = gender === 'male' ? 100 - bodyFatPercentage : 100.8 - (0.76 * bodyFatPercentage);
    const leanBodyMass = weight * (leanBodyMassPercentage / 100);
    let min, max: number;

    if (gender === 'male') {
        min = 75; max = 85;
    } else {
        min = 70; max = 75;
    }

    return {
        value: Number(leanBodyMass.toFixed(2)),
        min,
        max,
        range: `Health range: ${min}% - ${max}%`
    }
}

const calculateBMI = (weight: number, height: number): string => {
    const heightInMeters = height / 100;
    return String((weight / (heightInMeters * heightInMeters)).toFixed(2));
};

export default generateBodyFatResults;