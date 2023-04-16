import { SettingType } from '@/app/types/resultTypes';
import { getBodyFat } from '@/app/utils/getBodyFatPercentage';
import { Card, Metric, Text, Flex, Grid, Toggle, ToggleItem, CategoryBar, Button} from '@tremor/react';
import { useState } from 'react';
import WeightGraph from './weightGraph';
import CurrentStats from './currentStats';

const Results = ({ results }: any, userDetails: any) => {
    const [setting, setSetting] = useState<SettingType>('recommended');
    const resultData = results[setting.toUpperCase()];

    return (
        <div className="p-4 md:p-10 mx-auto max-w-7xl">
            <Grid className="gap-6 mx-auto">
                <Flex alignItems="center" justifyContent='center'>
                    <Metric> We recommend you start {results.CUT ? 'cutting' : 'bulking'} </Metric>
                    <Button>Start Again</Button>
                </Flex>
                <Card className="max-w-sm">
                <Flex alignItems='center' justifyContent='center'>
                    <Text>Body Fat %</Text>
                </Flex>
                    <CategoryBar
                        categoryPercentageValues={[10, 10, 10, 70]}
                        showAnimation={true}
                        colors={["orange", "emerald", "yellow", "rose"]}
                        percentageValue={results.BODY_FAT}
                    />
            </Card>
                <Toggle
                    color="zinc"
                    defaultValue="2"
                >
                    <ToggleItem value="1" text="Mild" onClick={() => setSetting('mild')} />
                    <ToggleItem value="2" text="Recommended" onClick={() => setSetting('recommended')} />
                    <ToggleItem value="3" text="Extreme" onClick={() => setSetting('extreme')} />
                </Toggle>
            </Grid>
            <Grid className="gap-6" numColsSm={2} numColsLg={3}>
                {resultData?.metrics.map((item: any) => {
                    return (
                        <Card key={item.title}>
                            <Flex alignItems="start">
                                <Text>{item.title}</Text>
                            </Flex>
                            <Flex
                                className="space-x-3 truncate"
                                justifyContent="start"
                                alignItems="baseline"
                            >
                                <Metric>{item.metric}</Metric>
                                {item.metricPrev && <Text className="truncate">{item.metricPrev}</Text>}
                            </Flex>
                        </Card>
                    );
                })}

            </Grid>
            <CurrentStats/>
            <WeightGraph/>
        </div>
    );
}

export default Results;