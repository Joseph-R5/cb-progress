// TODO left off here...
export const calculateTargetWeight = (currentBodyFatPercentage: number, caloriesPerDay: number, setting: string): number => {
  let weightLossPerWeek = 0;
  switch (setting) {
    case 'mild':
      weightLossPerWeek = 0.25;
      break;
    case 'recommended':
      weightLossPerWeek = 0.5;
      break;
    case 'extreme':
      weightLossPerWeek = 1;
      break;
    default:
      break;
  }

  const isOnCut = currentBodyFatPercentage >= 20;
  const isOnBulk = !isOnCut && currentBodyFatPercentage < 15;

  const weeklyWeightChange = (caloriesPerDay - (isOnCut ? 500 : isOnBulk ? -250 : 250)) / 3500;

  const targetWeight = (caloriesPerDay / 3500) * (isOnCut ? 1 : -1) * (currentBodyFatPercentage - 15) / (15 - (weeklyWeightChange * weightLossPerWeek));

  return Number(targetWeight.toFixed(1));
};


export const getExpectedWeights = (currentBodyFatPercentage: number, caloriesPerDay: number, currentWeight: number, setting: any) => {
  const isOnCut = currentBodyFatPercentage >= 20;
  const isOnBulk = !isOnCut && currentBodyFatPercentage < 15;

  const weeklyWeightChange = (caloriesPerDay / 3500) * (isOnCut ? -0.5 : isOnBulk ? 0.25 : -0.25);
  const weeksToReachTarget = Number(Math.abs(currentWeight - calculateTargetWeight(currentBodyFatPercentage, caloriesPerDay, setting))) / weeklyWeightChange;

  const expectedWeights = [];
  let expectedWeight = currentWeight;
  for (let i = 0; i <= weeksToReachTarget; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i * 7);
    expectedWeights.push({
      weight: expectedWeight.toFixed(1),
      date: date.toISOString().substr(0, 10)
    });
    expectedWeight += weeklyWeightChange;
  }

  return expectedWeights;
};
