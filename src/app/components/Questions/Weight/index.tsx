import { Button, Callout, Card, Flex, Grid, Subtitle, TextInput, Toggle, ToggleItem } from '@tremor/react';
import { ProgressProps, UpdatedUserDetails, WeightUnits } from '../../../types/pageProps';
import Image from 'next/image';
import { useState } from 'react';
import { ExclamationCircleIcon, ScaleIcon } from '@heroicons/react/solid';

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
        const value = event.target.value;
        const weight = parseInt(value);

        if (!isNaN(weight) ) {
            setWeight(weight);
        }
    };

    return (
        <Grid numCols={1} style={{ justifyContent: 'center', alignItems: 'center', paddingTop: '2rem' }}>
            <Card style={{ boxShadow: 'none', width: '50%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    src="/scale.svg"
                    alt="scale"
                    width={100}
                    height={120}
                />
                <Card style={{ boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', width: '50%' }}>
                    <Toggle
                        color="zinc"
                        defaultValue="kg"
                        style={{width: '100%'}}
                    >
                        <ToggleItem value="st" text="st"  style={{width: '33%', textAlign: 'center'}} onClick={() => setUnits('st')}/>
                        <ToggleItem value="lbs" text="lbs" style={{width: '33%', textAlign: 'center'}} onClick={() => setUnits('lbs')}/>
                        <ToggleItem value="kg" text="kg" style={{width: '33%', textAlign: 'center'}} onClick={() => setUnits('kg')}/>
                    </Toggle>
                    <TextInput
                        style={{ width: '50%', fontSize: '1.5rem' }}
                        icon={ScaleIcon}
                        onChange={handleWeightChange}
                        placeholder={units}
                    />
                    {error && <Callout
                        title="Please enter a valid weight"
                        icon={ExclamationCircleIcon}
                        color="rose"
                    />}
                </Card>
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
                        onClick={() => handleNext(1, { weight: weight })}
                    >
                        Next
                    </Button>
                </Flex>
            </Card>
        </Grid>
    )
};

export default Weight;