import { SettingType } from '@/app/types/settingTypes';
import { useState } from 'react';
import WeightGraph from './weightGraph';
import CurrentStats from './currentStats';
import BodyFatCategory from './bodyFatCategory';
import Targets from './targets';
import { Button, Flex } from '@tremor/react';
import { IResults, ITargetSettingData } from '../../types/resultsTypes';
import CustomLoader from '../Loader';
import { IUserDetails } from '@/app/types/dataTypes';
interface IResultsProps {
    results: IResults;
    startAgain: (nextStep: number, userDetails?: IUserDetails) => void;
}

const Results = ({ results, startAgain }: IResultsProps) => {
    const [setting, setSetting] = useState<SettingType>('recommended');
    const resultData = results[setting.toUpperCase()] as ITargetSettingData;
    const bodyComposition = results.BODY_COMPOSITION;

    return (
        <div>
            <BodyFatCategory results={results} setSetting={setSetting} />
            <Targets resultData={resultData} />
            {!resultData && <CustomLoader />}
            {resultData && <CurrentStats resultData={resultData} bodyComposition={bodyComposition} />}
            <WeightGraph results={results} />
            <Flex style={{ justifyContent: 'right' }}>
                <Button
                    onClick={() => startAgain(1)}
                    style={{ marginTop: '1rem', background: 'rgb(255,190,35)', backgroundColor: 'rgb(255,190,35)', border: 'none', color: 'black' }}
                >
                    Start Again
                </Button>
            </Flex>
        </div>
    );
}

export default Results;