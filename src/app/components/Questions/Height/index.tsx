import styles from '../../../styles/questions.module.css';
import { ProgressProps, UpdatedUserDetails, HeightUnits } from '../../../types/pageProps';
import Image from 'next/image';
import { useState } from 'react';

const Height: React.FC<ProgressProps> = ({ handleProgressChange }) => {
    const [height, setHeight] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);

    const handleNext = (progress: number, userDetails: Partial<UpdatedUserDetails>) => {
        if (height === 0 && progress !== -1) {
            setError(true);
        } else {
            handleProgressChange(progress, userDetails)
            setError(false);
        }
    };

    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>, type: string): void => {
        if (event.target.value === '') {
            return;
        }
        setHeight(parseInt(event.target.value));
    };

    return (
        <div className={styles.container}>
            <Image
                src="/male-height.svg"
                alt="Male"
                width={100}
                height={150}
            />
            <div className={styles.description}>HEIGHT</div>
            <div className={styles.inputContainer}>
                <input type="number" className={styles.heightTextBox} placeholder=" " onChange={e => handleHeightChange(e, 'cm')} />
                <span className={styles.inputText}>cm</span>
            </div>
            <div className={styles.description}>We asked for your weight & height to calculate a sutiable goal weight range for you</div>
            <div className={styles.buttonsContainer}>
                <button className={styles.button} onClick={() => handleNext(-1, {})}>Back</button>
                <button className={styles.button} onClick={() => handleNext(1, { height })}>Next</button>
            </div>
            {error && <div className={styles.error}>Please enter a valid height</div>}
        </div>
    )
};

export default Height;
