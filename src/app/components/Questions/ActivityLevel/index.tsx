import { Card, Grid, Subtitle, Title } from '@tremor/react';
import styles from '../../../styles/activity.module.css';
import { ProgressProps, UpdatedUserDetails, HeightUnits } from '../../../types/pageProps';
import Image from 'next/image';

const ActivityLevel: React.FC<ProgressProps> = ({ handleProgressChange }) => {
    return (
        <Grid numColsLg={3} numColsMd={1} numColsSm={1} className={styles.activityLevelGrid}>
            <Card className={styles.activityLevelCard} onClick={() => handleProgressChange(2, { activityLevel: 'light' })}>
                <Title className={styles.activityLevelTitle}>Light</Title>
                <br />
                <Image
                    style={{ width: '100%' }}
                    src="/light.svg"
                    alt="Light"
                    width={200}
                    height={180}
                />
                <br />
                <Subtitle>Excerise: 1-3 times/week</Subtitle>
            </Card>
            <Card className={styles.activityLevelCard} onClick={() => handleProgressChange(2, { activityLevel: 'moderate' })}>
                <Title className={styles.activityLevelTitle}>Moderate</Title>
                <br />
                <Image
                    style={{ width: '100%' }}
                    src="/moderate.svg"
                    alt="Moderate"
                    width={200}
                    height={180}
                />
                <br />
                <Subtitle>Excerise: 4-5 times/week</Subtitle>
            </Card>
            <Card className={styles.activityLevelCard} onClick={() => handleProgressChange(2, { activityLevel: 'intense' })}>
                <Title className={styles.activityLevelTitle}>Intense</Title>
                <br />
                <Image
                    style={{ width: '100%' }}
                    src="/intense.svg"
                    alt="Intense"
                    width={200}
                    height={180}
                />
                <br />
                <Subtitle>Excerise daily</Subtitle>
            </Card>
        </Grid>
    );
};

export default ActivityLevel;