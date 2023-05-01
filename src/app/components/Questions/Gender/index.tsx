import Image from 'next/image';
import { ProgressProps } from '../../../types/pageProps';
import { Button, Card, Grid, Title } from '@tremor/react';
import styles from '../../../styles/gender.module.css';

const Gender: React.FC<ProgressProps> = ({ handleProgressChange }) => {
    return (
        <Grid numCols={1}>
            <Grid numCols={2} className={styles.genderGrid}>
                <Card
                    className={styles.genderCard}
                    onClick={() => handleProgressChange(1, { gender: 'male' })}
                    style={{ boxShadow: 'none' }}
                >
                    <Title className={styles.genderTitle}>Male</Title>
                    <Image
                        style={{ width: '100%' }}
                        src="/human-male.svg"
                        alt="Male"
                        width={200}
                        height={180}
                    />
                </Card>
                <Card
                    className={styles.genderCard}
                    onClick={() => handleProgressChange(1, { gender: 'female' })}
                    style={{ boxShadow: 'none' }}
                >
                    <Title className={styles.genderTitle}>Female</Title>
                    <Image
                        style={{ width: '100%' }}
                        src="/human-female.svg"
                        alt="Female"
                        width={200}
                        height={180}
                    />
                </Card>
            </Grid>
            <br/>            <br/>
            <Button
                size="lg"
                className={styles.backButton}
                onClick={() => handleProgressChange(0, {})}
            >
                Go Back
            </Button>
        </Grid>

    );
};

export default Gender;
