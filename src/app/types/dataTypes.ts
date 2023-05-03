export type Gender = 'male' | 'female';
export type ActivityLevel = 'light' | 'moderate' | 'intense';

export interface IUserDetails {
    gender: Gender
    age: number;
    height: number;
    waist: number;
    neck: number;
    hip: number;
    weight: number;
    activityLevel: ActivityLevel
};