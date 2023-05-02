import { Button, Callout, Card, Flex, Grid, TextInput } from '@tremor/react';
import styles from '../../../styles/questions.module.css';
import { ProgressProps, UpdatedUserDetails, HeightUnits, Gender } from '../../../types/pageProps';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronRightIcon, ExclamationCircleIcon, PaperAirplaneIcon } from '@heroicons/react/solid';

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
                        style={{ width: '100%', fontSize: '1.5rem' }}
                        icon={ChevronRightIcon}
                        onChange={(e) => handleMeasurementChange(WAIST, e)}
                        placeholder="waist cm"
                    />
                    <br/>
                    <TextInput
                        style={{ width: '100%', fontSize: '1.5rem' }}
                        icon={ChevronRightIcon}
                        onChange={(e) => handleMeasurementChange(NECK, e)}
                        placeholder="neck cm"
                    />
                    <br/>
                    {gender === 'female' && <TextInput
                        style={{ width: '100%', fontSize: '1.5rem' }}
                        icon={ChevronRightIcon}
                        onChange={(e) => handleMeasurementChange(HIP, e)}
                        placeholder="hip cm"
                    />}
                    {error && <Callout
                        title="Please enter a valid waist and neck size"
                        icon={ExclamationCircleIcon}
                        color="rose"
                    />}
                </Card>
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
                        onClick={() => handleNext(1, { waist, neck, hip })}
                    >
                        Next
                    </Button>
                </Flex>
            </Card>
        </Grid>
    )
};

export default Measurements;