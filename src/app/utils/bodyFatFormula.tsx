import { FormValues } from "../types/form";
import { BodyCompositionResult } from '../types/bodyFatTypes';

const calculateBodyFatPercentage = (formValues: FormValues): BodyCompositionResult => {
    const gender = formValues.gender;
    const age = Number(formValues.age);
    const weight = Number(formValues.weight);
    const height = Number(formValues.height);
    const neck = Number(formValues.neck);
    const waist = Number(formValues.waist);
    const hip = formValues.hip ? Number(formValues.hip) : 0;

    let bfPercentage: number;

    if (gender === 'male') {
        const factor1 = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height));
        const factor2 = weight * 1.082 + 94.42 - factor1 * 4.15;
        bfPercentage = factor1 * factor2 / weight * 100;
    } else if (gender === 'female') {
        const factor1 = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height));
        const factor2 = weight * 0.732 + 8.987 + factor1 * 0.157 - age * 0.07;
        bfPercentage = factor1 * factor2 / weight * 100;
    } else {
        throw new Error('Invalid gender');
    }

    const leanBodyMass = weight - (bfPercentage * weight) / 100;
    const bodyFatWeight = (bfPercentage * weight) / 100;

    switch (true) {
        case age >= 17 && age <= 19 && bfPercentage <= 13.5:
            bfPercentage += 1.5;
            break;
        case age >= 20 && age <= 29 && bfPercentage <= 15.5:
            bfPercentage += 2.0;
            break;
        case age >= 30 && age <= 39 && bfPercentage <= 17.5:
            bfPercentage += 2.5;
            break;
        case age >= 40 && age <= 49 && bfPercentage <= 19.5:
            bfPercentage += 3.0;
            break;
        case age >= 50 && bfPercentage <= 21.5:
            bfPercentage += 3.5;
            break;
        default:
            break;
    }

    return {
        bodyFatPercentage: Number(bfPercentage.toFixed(2)),
        leanBodyMass: Number(leanBodyMass.toFixed(2)),
        bodyFatWeight: Number(bodyFatWeight.toFixed(2))
    };
}

export default calculateBodyFatPercentage;