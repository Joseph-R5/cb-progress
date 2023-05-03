import { Button, Callout, Card, Flex, Grid, Subtitle, TextInput } from '@tremor/react';
import { ProgressProps } from '../../../types/pageProps';
import Image from 'next/image';
import { useState } from 'react';
import { ChartBarIcon, ExclamationCircleIcon } from '@heroicons/react/solid';
import { IUserDetails } from '@/app/types/dataTypes';

const Height: React.FC<ProgressProps> = ({ handleProgressChange }) => {
    const [height, setHeight] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);

    const handleNext = (progress: number, userDetails: Partial<IUserDetails>) => {
        if (height === 0 && progress !== -1) {
            setError(true);
        } else {
            handleProgressChange(progress, userDetails)
            setError(false);
        }
    };

    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>, type: string): void => {
        const value = event.target.value;
        if (value === '') {
            return;
        }

        const height = parseInt(value);

        if (!isNaN(height)) {
            setHeight(height);
        };
    };

    return (
        <Grid numCols={1} style={{ justifyContent: 'center', alignItems: 'center', paddingTop: '2rem' }}>
            <Card style={{ boxShadow: 'none', width: '50%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    src="/male-height.svg"
                    alt="Height"
                    width={100}
                    height={120}
                />
                <Card style={{ boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', width: '50%' }}>
                    <TextInput
                        style={{ width: '50%', fontSize: '1.5rem' }}
                        icon={ChartBarIcon}
                        onChange={e => handleHeightChange(e, 'cm')}
                        placeholder="cm"
                    />
                    {error && <Callout
                        title="Please enter a valid height"
                        icon={ExclamationCircleIcon}
                        color="rose"
                    />}
                </Card>
                <Subtitle style={{ fontSize: '22px', wordWrap: 'break-word', whiteSpace: 'pre-wrap', textAlign: 'center' }}>
                    We asked for your weight & height to calculate a sutiable goal weight range for you
                </Subtitle>
                <br />
                <Flex style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Button
                        size="xl"
                        style={{ fontSize: '22px', background: 'rgb(255,190,35)', color: 'black', border: 'none' }}
                        onClick={() => handleNext(-1, {})}
                    >
                        Back
                    </Button>
                    <Button
                        size="xl"
                        style={{ background: 'rgb(255,190,35)', color: 'black', border: 'none' }}
                        onClick={() => handleNext(1, { height })}
                    >
                        Next
                    </Button>
                </Flex>
            </Card>
        </Grid>
    )
};

export default Height;
