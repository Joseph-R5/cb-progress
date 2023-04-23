import { SettingType } from '@/app/types/resultTypes';
import { useState } from 'react';
import WeightGraph from './weightGraph';
import CurrentStats from './currentStats';
import BodyFatCategory from './bodyFatCategory';
import Targets from './targets';
import { Button } from '@tremor/react';

const Results = ({ results }: any, userDetails: any) => {
    const [setting, setSetting] = useState<SettingType>('recommended');
    const resultData = results[setting.toUpperCase()];
    const bodyComposition = results.BODY_COMPOSITION;

    return (
        <div>
            <BodyFatCategory results={results} setSetting={setSetting} />
            <Targets resultData={resultData} />
            {resultData && <CurrentStats resultData={resultData} bodyComposition={bodyComposition}/>}
            <WeightGraph results={results} />
            <Button style={{marginTop: '1rem', marginLeft: 'auto', marginRight: 'auto'}}>Start Again</Button>
        </div>
    );
}

export default Results;