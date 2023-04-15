import styles from '../../../styles/gender.module.css';
import Image from 'next/image';
import { ProgressProps } from '../../../types/pageProps';

const Gender: React.FC<ProgressProps> = ({ handleProgressChange }) => {
    return (
        <div className={styles.genderContainer}>
            <div className={styles.genderOption} onClick={() => handleProgressChange(1, {gender: 'male'})}>
                <Image
                    src="/human-male.svg"
                    alt="Male"
                    width={180}
                    height={180}
                />
                <h2>Male</h2>
            </div>
            <div className={styles.genderOption} onClick={() => handleProgressChange(1, {gender: 'female'})}>
                <Image
                    src="/human-female.svg"
                    alt="Female"
                    width={180}
                    height={180}
                />
                <h2>Female</h2>
            </div>
        </div>
    )
};

export default Gender;
