import { SettingType } from "../types/settingTypes";
import { IWeightDate } from "../types/weightDateTypes";

export const getWeightDates = (
  currentBodyFatPercentage: number,
  currentWeight: number,
  targetWeight: number,
  setting: SettingType,
  gender: 'male' | 'female'
): IWeightDate[] => {
  const isOnCut = currentBodyFatPercentage >= (gender === 'male' ? 15 : 20);
  const multiplier = isOnCut ? -1 : 1;
  let expectedWeight = currentWeight;
  const dates = [];

  let weeklyWeightChange = 0;
  switch (setting) {
    case 'mild':
      weeklyWeightChange = 0.25 * multiplier;
      break;
    case 'recommended':
      weeklyWeightChange = 0.5 * multiplier;
      break;
    case 'extreme':
      weeklyWeightChange = 1 * multiplier;
      break;
    default:
      break;
  };

  const date = new Date();
  while ((multiplier === -1 && expectedWeight > targetWeight) || (multiplier === 1 && expectedWeight < targetWeight)) {
    dates.push({
      weight: expectedWeight.toFixed(1),
      date: date.toISOString().slice(0, 10)
    });
    expectedWeight += weeklyWeightChange;
    date.setDate(date.getDate() + 7);
  };

  return dates;
}