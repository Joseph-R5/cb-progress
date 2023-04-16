export interface PageProps {
    onNextStep: (next: number, userDetails: UpdatedUserDetails) => void;
}

export interface ProgressProps {
    handleProgressChange: (next: number, updatedUserDetails: Partial<UpdatedUserDetails>) => void;
    gender?: Gender;
}

export type Gender = 'male' | 'female';

export type UpdatedUserDetails = {
    gender: Gender
    age: number;
    height: number;
    waist: number;
    neck: number;
    hip: number;
    weight: number;
    activityLevel: ActivityLevel
};

export type WeightUnits = 'kg' | 'lbs' | 'st';
export type HeightUnits = 'cm' | 'ft & ins';
export type ActivityLevel = 'light' | 'moderate' | 'intense';