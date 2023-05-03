import { IUserDetails } from "../types/dataTypes";

export const getBodyFat = (results: IUserDetails): number => {
    const { waist, neck, gender, height, hip } = results;

    if (gender === 'male') {
      return Math.round(495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450);
    } else {
      return Math.round(495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height)) - 450);
    }
};