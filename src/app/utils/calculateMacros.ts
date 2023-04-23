import { IMacros } from "../types/macrosTypes";

export const getMacros = (caloriesPerDay: number): IMacros => {
    const proteinGrams = Math.round((caloriesPerDay * 0.3) / 4);
    const carbGrams = Math.round((caloriesPerDay * 0.4) / 4);
    const fatGrams = Math.round((caloriesPerDay * 0.3) / 9);
    const sugarGrams = Math.round((caloriesPerDay * 0.1) / 4);

    const macros: IMacros = [
        { type: 'Protein', amount: proteinGrams },
        { type: 'Carbs', amount: carbGrams },
        { type: 'Fat', amount: fatGrams },
        { type: 'Sugar', amount: sugarGrams },
    ];

    return macros;
};
