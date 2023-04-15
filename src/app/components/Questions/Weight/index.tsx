import styles from '../../../styles/questions.module.css';
import { ProgressProps, UpdatedUserDetails, WeightUnits } from '../../../types/pageProps';
import Image from 'next/image';
import { useState } from 'react';

const Weight: React.FC<ProgressProps> = ({ handleProgressChange }) => {
    const [weight, setWeight] = useState<number>();
    const [units, setUnits] = useState<WeightUnits>('kg');
    const [error, setError] = useState<boolean>(false);

    const handleNext = (progress: number, userDetails: Partial<UpdatedUserDetails>) => {
        if (weight === undefined && progress !== -1) {
            setError(true);
        } else {
            handleProgressChange(progress, userDetails)
            setError(false);
        }
    };

    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(parseInt(event.target.value));
    };

    return (
        <div className={styles.container}>
            <Image
                src="/scale.svg"
                alt="Male"
                width={100}
                height={120}
            />
            <div className={styles.description}>WEIGHT</div>
            <div className={styles.inputContainer}>
                <input type="number" className={styles.ageTextBox} placeholder=" " onChange={handleWeightChange} />
                <span className={styles.inputText}>{units}</span>
            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.button} onClick={() => handleNext(-1, {})}>Back</button>
                <div className={styles.unitsContainer}>
                    <button className={units === 'st' ? styles.selected : ''} onClick={() => setUnits('st')}>st</button>
                    <button className={units === 'lbs' ? styles.selected : ''} onClick={() => setUnits('lbs')}>lbs</button>
                    <button className={units === 'kg' ? styles.selected : ''} onClick={() => setUnits('kg')}>kg</button>
                </div>
                <button className={styles.button} onClick={() => handleNext(1, { weight: weight })}>Next</button>
            </div>
            {error && <div className={styles.error}>Please enter a valid weight</div>}
        </div>
    )
};

export default Weight;