import { BodyFatResults } from "../types/bodyFatTypes";
import { FormValues } from "../types/form";
import calculateBodyFatPercentage from "./bodyFatFormula";

const generateBodyFatResults = ({gender, age, weight, height, neck, waist}: FormValues, bodyFatPercentage: number): BodyFatResults => {
    return {
        category: getCategory(bodyFatPercentage),
        bodyFatMass: calculateBodyFatMass(Number(weight), Number(height), gender, Number(neck), Number(waist)),
        leanBodyMass: calculateLeanBodyMass(Number(weight), bodyFatPercentage, gender),
        idealBodyFat: calculateIdealBodyFat(gender, Number(age)),
        bodyFatToLose: calculateBodyFatToLose({gender, age, weight, height, neck, waist}, bodyFatPercentage),
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

const calculateBodyFatMass = (weight: number, height: number, gender: string, neckSize: number, waistSize: number, hipSize?: number): string => {
    let bfa: number;

    if (gender === 'male') {
        bfa = 0.32810 * weight + 0.33929 * height - 29.5336 + neckSize * 0.2017 + waistSize * 0.3307 - 31.9886;
    } else {
        bfa = 0.29569 * weight + 0.41813 * height - 43.2933 + neckSize * 0.1049 + waistSize * 0.249 + (hipSize || 0) * 0.1798 + 9.1629;
    }

    return String(bfa);
};

const calculateLeanBodyMass = (weight: number, bodyFatPercentage: number, gender: string): string => {
    const leanBodyMassPercentage = gender === 'male' ? 100 - bodyFatPercentage : 100.8 - (0.76 * bodyFatPercentage);
    const leanBodyMass = weight * leanBodyMassPercentage / 100;
    return leanBodyMass.toFixed(2);
}

const calculateBodyFatToLose = (
    formValues: FormValues,
    idealBodyFatPercentage: number
): string => {
    const weight = Number(formValues.weight);
    const bodyFatPercentage = calculateBodyFatPercentage(formValues,);
    const currentBodyFatWeight = weight * (Number(bodyFatPercentage) / 100);
    const idealBodyFatWeight = (idealBodyFatPercentage / 100) * weight;

    return String(currentBodyFatWeight - idealBodyFatWeight);
};


const calculateIdealBodyFat = (gender: string, age: number): string => {
    let idealBodyFat = 0;
    switch (gender) {
        case "male":
            idealBodyFat = 15 - Math.max(0, age - 20) * 0.4;
            break;
        case "female":
            idealBodyFat = 22 - Math.max(0, age - 20) * 0.2;
            break;
        default:
            throw new Error("Invalid gender");
    }
    return String(idealBodyFat);
};

const calculateBMI = (weight: number, height: number): string => {
    const heightInMeters = height / 100;
    return String((weight / (heightInMeters * heightInMeters)).toFixed(2));
};

export default generateBodyFatResults;