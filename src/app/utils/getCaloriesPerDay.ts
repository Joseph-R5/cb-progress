
import { Gender, IUserDetails } from "../types/dataTypes";
import { SettingType } from "../types/settingTypes";

export const calculateBasalMetabolicRate = (gender: Gender, age: number, height: number, weight: number): number => {
    let bmr = 0;

    if (gender === 'male') {
        bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
        bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    return bmr;
}

export const calculateCaloriesToLoseWeight = ({ gender, age, height, weight, activityLevel }: IUserDetails, setting: SettingType, isOnCut: boolean): number => {
    const bmr: number = calculateBasalMetabolicRate(gender, age, height, weight);

    // Multiply BMR by activity factor to estimate TDEE
    let tdee: number;
    switch (activityLevel) {
        case 'light':
            tdee = bmr * 1.375;
            break;
        case 'moderate':
            tdee = bmr * 1.55;
            break;
        case 'intense':
            tdee = bmr * 1.725;
            break;
        default:
            tdee = bmr;
            break;
    }

    // Calculate calorie deficit based on the chosen setting
    let calorieDeficitPerDay: number = 0;
    switch (setting) {
        case 'mild':
            calorieDeficitPerDay = 250;
            break;
        case 'recommended':
            calorieDeficitPerDay = 500;
            break;
        case 'extreme':
            calorieDeficitPerDay = 1000;
            break;
        default:
            break;
    }

    if (isOnCut) {
        return Math.round(tdee - calorieDeficitPerDay);
    }

    return Math.round(tdee + calorieDeficitPerDay);
}
