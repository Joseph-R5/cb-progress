import { ProgressProps, UpdatedUserDetails } from '../../../types/pageProps';
import { useState } from 'react';
import Image from 'next/image';
import { Button, Callout, Card, Flex, Grid, Subtitle, TextInput } from '@tremor/react';
import { CalendarIcon, ExclamationCircleIcon } from '@heroicons/react/solid';

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
        const value = event.target.value;
        const age = parseInt(value);
    
        if (!isNaN(age) && age > 0 && age < 100) {
            setAge(age);
        }
    };

    return (
        <Grid numCols={1} style={{ justifyContent: 'center', alignItems: 'center', paddingTop: '2rem' }}>
            <Card style={{ boxShadow: 'none', width: '50%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    src="/cake.svg"
                    alt="Cake"
                    width={100}
                    height={120}
                />
                <Card style={{boxShadow: 'none', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', width: '50%'}}>
                    <TextInput
                        style={{ width: '50%', fontSize: '1.5rem' }}
                        icon={CalendarIcon}
                        onChange={handleAgeChange}
                        placeholder="years..."
                    />
                    {error && <Callout
                        title="Please enter a valid age"
                        icon={ExclamationCircleIcon}
                        color="rose"
                    />}
                </Card>
                <Subtitle style={{ fontSize: '22px', wordWrap: 'break-word', whiteSpace: 'pre-wrap', textAlign: 'center' }}>
                    We use your gender and age to estimate how many calories your body needs each day.
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
                        onClick={() => handleNext(1, { age: age })}
                    >
                        Next
                    </Button>
                </Flex>
            </Card>
        </Grid>
    )
};

export default Age;