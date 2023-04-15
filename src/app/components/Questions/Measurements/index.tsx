import styles from '../../../styles/questions.module.css';
import { ProgressProps, UpdatedUserDetails, HeightUnits, Gender } from '../../../types/pageProps';
import Image from 'next/image';
import { useState } from 'react';

const WAIST = 'waist';
const NECK = 'neck';
const HIP = 'hip';

const Measurements: React.FC<ProgressProps> = ({ handleProgressChange, gender }) => {
    const [waist, setWaist] = useState<number>();
    const [neck, setNeck] = useState<number>();
    const [hip, setHip] = useState<number>();
    const [units, setUnits] = useState<HeightUnits>('cm');
    const [error, setError] = useState<boolean>(false);

    const handleMeasurementChange = (type: string, event: React.ChangeEvent<HTMLInputElement>) => {
        switch (type) {
            case WAIST:
                setWaist(parseInt(event.target.value))
                break;
            case NECK:
                setNeck(parseInt(event.target.value));
                break;
            case HIP:
                setHip(parseInt(event.target.value));
                break;
            default:
                break;
        }
    };

    const handleNext = (progress: number, userDetails: Partial<UpdatedUserDetails>) => {
        if ((waist === undefined || neck === undefined || (gender === 'female' && hip === undefined)) && progress !== -1) {
            setError(true);
        } else {
            handleProgressChange(progress, userDetails);
            setError(false);
        }
    };

    return (
        <div className={styles.container}>
            <Image
                src="/male-height.svg"
                alt="Male"
                width={100}
                height={150}
            />
            <div className={styles.description}>MY MEASUREMENTS</div>
            <div className={styles.inputContainer}>
                <div className={styles.label}>Waist</div>
                <input type="number" className={styles.ageTextBox} placeholder=" " onChange={(e) => handleMeasurementChange(WAIST, e)}/>
                <span className={styles.inputText}>{units}</span>
            </div>
            <div className={styles.inputContainer}>
                <div className={styles.label}>Neck</div>
                <input type="number" className={styles.ageTextBox} placeholder=" " onChange={(e) => handleMeasurementChange(NECK, e)} />
                <span className={styles.inputText}>{units}</span>
            </div>
            {gender === 'female' ? 
                <>
                    <div className={styles.inputContainer}>
                        <div className={styles.label}>Hip</div>
                        <input type="number" className={styles.ageTextBox} placeholder=" " onChange={(e) => handleMeasurementChange(HIP, e)}/>
                        <span className={styles.inputText}>{units}</span>
                    </div>
                </> 
            : null}
            <div className={styles.buttonsContainer}>
                <button className={styles.button} onClick={() => handleNext(-1, {})}>Back</button>
                <button className={styles.button} onClick={() => handleNext(1, { waist, neck, hip })}>Next</button>
            </div>
            {error && <div className={styles.error}>Incomplete form!</div>}
        </div>
    )
};

export default Measurements;