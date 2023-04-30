import { SettingType } from '@/app/types/resultTypes';
import { useState } from 'react';
import WeightGraph from './weightGraph';
import CurrentStats from './currentStats';
import BodyFatCategory from './bodyFatCategory';
import Targets from './targets';
import { Button, Flex } from '@tremor/react';
import { IResults, ITargetSettingData } from '../../types/resultsTypes';
import { UpdatedUserDetails } from '@/app/types/pageProps';
import CustomLoader from '../Loader';
interface ResultsProps {
    results: IResults;
    startAgain: (nextStep: number, userDetails?: UpdatedUserDetails) => void;
}

const Results = ({ results, startAgain }: ResultsProps) => {
    const [setting, setSetting] = useState<SettingType>('recommended');
    const resultData = results[setting.toUpperCase()] as ITargetSettingData;
    const bodyComposition = results.BODY_COMPOSITION;

    return (
        <div>
            <BodyFatCategory results={results} setSetting={setSetting} />
            <Targets resultData={resultData} />
            {!resultData && <CustomLoader/>}
            {resultData && <CurrentStats resultData={resultData} bodyComposition={bodyComposition} />}
            <WeightGraph results={results} />
            <Flex style={{ justifyContent: 'right' }}>
                <Button onClick={() => startAgain(1)} style={{ marginTop: '1rem' }}>Start Again</Button>
            </Flex>
        </div>
    );
}

export default Results;