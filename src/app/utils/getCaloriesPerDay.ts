
import { Gender, UpdatedUserDetails } from "../types/pageProps";
import { SettingType } from "../types/resultTypes";

export const calculateBasalMetabolicRate = (gender: Gender, age: number, height: number, weight: number): number => {
    let bmr = 0;

    if (gender === 'male') {
        bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
        bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    return bmr;
}

export const calculateCaloriesToLoseWeight = ({ gender, age, height, weight, activityLevel }: UpdatedUserDetails, setting: SettingType): number => {
    const basalMetabolicRate = calculateBasalMetabolicRate(gender, age, height, weight);
    let dailyCalorieRequirement = basalMetabolicRate;

    switch (activityLevel) {
        case 'light':
            dailyCalorieRequirement += 100;
            break;
        case 'moderate':
            dailyCalorieRequirement += 200;
            break;
        case 'intense':
            dailyCalorieRequirement += 300;
            break;
        default:
            break;
    }

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

    const calorieDeficitPerWeek = calorieDeficitPerDay * 7;
    const caloriesToLoseWeight = dailyCalorieRequirement - calorieDeficitPerWeek;

    return Math.round(caloriesToLoseWeight);
}