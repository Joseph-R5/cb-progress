import { Gender, IUserDetails } from "./dataTypes";

export interface PageProps {
    onNextStep: (next: number, userDetails: IUserDetails) => void;
}

export interface ProgressProps {
    handleProgressChange: (next: number, userDetails: Partial<IUserDetails>) => void;
    gender?: Gender;
}

export type WeightUnits = 'kg' | 'lbs' | 'st';
export type HeightUnits = 'cm' | 'ft & ins';
export type ActivityLevel = 'light' | 'moderate' | 'intense';