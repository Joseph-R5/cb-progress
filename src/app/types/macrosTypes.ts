type IProtein = { type: 'Protein', amount: number };
type ICarbs = { type: 'Carbs', amount: number };
type IFat = { type: 'Fat', amount: number };
type ISugar = { type: 'Sugar', amount: number };

type IMacro = IProtein | ICarbs | IFat | ISugar;
export type IMacros = IMacro[];