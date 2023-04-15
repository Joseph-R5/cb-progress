import styles from '../../../styles/activity.module.css';
import { ProgressProps, UpdatedUserDetails, HeightUnits } from '../../../types/pageProps';
import Image from 'next/image';
import { useState } from 'react';

const ActivityLevel: React.FC<ProgressProps> = ({ handleProgressChange }) => {
    return (
        <>
            <div>ACTIVITY LEVEL</div>
            <div className={styles.activityContainer}>
                <div className={styles.activityOption} onClick={() => handleProgressChange(2, {activityLevel: 'light'})}>
                    <Image
                        src="/light.svg"
                        alt="Light"
                        width={150}
                        height={150}
                    />
                    <h2>Light</h2>
                    <p>Exercise: 1-3 times/week</p>
                </div>
                <div className={styles.activityOption} onClick={() => handleProgressChange(2, {activityLevel: 'moderate'})}>
                    <Image
                        src="/moderate.svg"
                        alt="Moderate"
                        width={150}
                        height={150}
                    />
                    <h2>Moderate</h2>
                    <p>Exercise: 4-5 times/week</p>
                </div>
                <div className={styles.activityOption} onClick={() => handleProgressChange(2, {activityLevel: 'intense'})}>
                    <Image
                        src="/intense.svg"
                        alt="Intense"
                        width={150}
                        height={150}
                    />
                    <h2>Intense</h2>
                    <p>Exercise daily</p>
                </div>
            </div>
        </>
    )
};

export default ActivityLevel;