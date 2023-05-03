import { IUserDetails } from "../types/dataTypes";

export const getTargetWeight = (data: IUserDetails) => {
    const { gender, height, waist, neck, weight } = data;
    let lbm: number;

    if (gender === 'male') {
        lbm = (0.407 * weight) + (0.267 * height) - (19.2 * Math.pow(height / waist, 2)) + (0.387 * neck) + 2.5;
    } else {
        lbm = (0.252 * weight) + (0.473 * height) - (48.3 * Math.pow(height / waist, 2)) + (0.261 * neck) + 5.6;
    }

    let targetWeight: number;

    if (gender === 'male') {
        targetWeight = lbm * 1.1;
    } else {
        targetWeight = lbm * 1.15;
    }

    return targetWeight;
};
