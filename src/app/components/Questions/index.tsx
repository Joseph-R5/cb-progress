'use client';
import { PageProps } from '../../types/pageProps';
import { IUserDetails } from '../../types/dataTypes';
import { useState, useEffect } from 'react';
import Age from './Age';
import Measurements from './Measurements';
import Gender from './Gender';
import Weight from './Weight';
import Height from './Height';
import ActivityLevel from './ActivityLevel';
import { Grid, ProgressBar } from '@tremor/react';

const Questions: React.FC<PageProps> = ({ onNextStep }) => {
    const [currentProgress, setCurrentProgress] = useState<number>(0);
    const [userDetails, setUserDetails] = useState<IUserDetails>({
        gender: 'male', age: 0, height: 0, waist: 0, neck: 0, weight: 0, activityLevel: 'light', hip: 0
    });

    const handleNextStep = (nextStep: number) => {
        const container = document.getElementById('mainContainer');

        if (container) {
            container.classList.add('wipe-out-right');

            setTimeout(() => {
                container.classList.remove('wipe-out-right');
                onNextStep(nextStep, userDetails);
            }, 1050);
        }
    }

    const handleProgressChange = (nextProgress: number, updatedUserDetails: Partial<IUserDetails>) => {
        if (nextProgress === 0) {
            handleNextStep(0);
        } else if (nextProgress === 2) {
            handleNextStep(3);
        } else {
            setCurrentProgress(currentProgress + nextProgress);
            setUserDetails({ ...userDetails, ...updatedUserDetails });
        }
    };

    useEffect(() => {
        // console.log('User details', userDetails);
    }, [userDetails]);

    let currentComponent = null;
    switch (currentProgress) {
        case 0:
            currentComponent = <Gender handleProgressChange={handleProgressChange} />;
            break;
        case 1:
            currentComponent = <Age handleProgressChange={handleProgressChange} />;
            break;
        case 2:
            currentComponent = <Weight handleProgressChange={handleProgressChange} />;
            break;
        case 3:
            currentComponent = <Height handleProgressChange={handleProgressChange} />;
            break;
        case 4:
            currentComponent = <Measurements handleProgressChange={handleProgressChange} gender={userDetails.gender} />;
            break;
        case 5:
            currentComponent = <ActivityLevel handleProgressChange={handleProgressChange} />;
            break;
        default:
            currentComponent = <></>;
    }

    return (
        <Grid numCols={1} style={{ width: '75%' }}>
            <ProgressBar percentageValue={currentProgress * (100 / 6)} color="teal" className="mt-3" />
            {currentComponent}
        </Grid>
    )
};

export default Questions;