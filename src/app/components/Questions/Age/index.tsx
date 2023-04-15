import { ProgressProps, UpdatedUserDetails } from '../../../types/pageProps';
import styles from '../../../styles/questions.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Age: React.FC<ProgressProps> = ({ handleProgressChange }) => {
    const [age, setAge] = useState<number>();
    const [error, setError] = useState<boolean>(false);

    const handleNext = (progress: number, userDetails: Partial<UpdatedUserDetails>) => {
        if (age === undefined && progress !== -1) {
            setError(true);
        } else {
            handleProgressChange(progress, userDetails)
            setError(false);
        }
    }

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(parseInt(event.target.value));
    };

    return (
        <div className={styles.container}>
            <Image
                src="/cake.svg"
                alt="Male"
                width={100}
                height={120}
            />
            <div className={styles.inputContainer}>
                <input type="number" className={styles.ageTextBox} placeholder=" " onChange={handleAgeChange} />
                <span className={styles.inputText}>yrs</span>
            </div>
            <div className={styles.description}>
                We use your gender and age to estimate how many calories your body needs each day.
            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.button} onClick={() => handleNext(-1, {})}>Back</button>
                <button className={styles.button} onClick={() => handleNext(1, { age: age })}>Next</button>
            </div>
            {error && <div className={styles.error}>Please enter a valid age</div>}
        </div>
    )
};

export default Age;