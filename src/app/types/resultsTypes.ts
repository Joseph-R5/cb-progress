interface ICategoryBarData {
    max: number;
    min: number;
    range: string;
    value: number;
}

export interface IBodyComposition {
    bmi: string;
    bodyFatMass: ICategoryBarData;
    category: string;
    leanBodyMass: ICategoryBarData;
}

export interface IMetricData {
    title: string;
    metric: string;
    metricPrev: string;
}

interface IWeightDates {
    weight: string;
    date: string;
}

export interface ITargetSettingData {
    metrics: IMetricData[];
    weightDates: IWeightDates[];
}

export interface IResults {
    [key: string]: number | boolean | IBodyComposition | ITargetSettingData;
    BODY_FAT: number;
    CUT: boolean;
    BODY_COMPOSITION: IBodyComposition;
    EXTREME: ITargetSettingData;
    RECOMMENDED: ITargetSettingData;
    MILD: ITargetSettingData;
};