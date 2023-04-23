export type BodyCompositionResult = {
    bodyFatPercentage: number;
    leanBodyMass: number;
    bodyFatWeight: number;
}

export type IBodyFatMass = {
    value: number;
    min: number;
    max: number;
    range: string
}

export type BodyFatResults = {
    category: string;
    bodyFatMass: IBodyFatMass;
    leanBodyMass: IBodyFatMass;
    bmi: string;
}