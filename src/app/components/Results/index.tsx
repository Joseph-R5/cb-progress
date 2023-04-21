import { SettingType } from '@/app/types/resultTypes';
import { getBodyFat } from '@/app/utils/getBodyFatPercentage';
import { Card, Metric, Text, Flex, Grid, Toggle, ToggleItem, CategoryBar, Button} from '@tremor/react';
import { useState } from 'react';
import WeightGraph from './weightGraph';
import CurrentStats from './currentStats';
import BodyFatCategory from './bodyFatCategory';
import Targets from './targets';

const Results = ({ results }: any, userDetails: any) => {
    const [setting, setSetting] = useState<SettingType>('recommended');
    const resultData = results[setting.toUpperCase()];

    return (
        <div className="p-4 md:p-10 mx-auto max-w-7xl">
            <BodyFatCategory results={results} setSetting={setSetting}/>
            <Targets resultData={resultData} />
            <CurrentStats/>
            <WeightGraph/>
        </div>
    );
}

export default Results;