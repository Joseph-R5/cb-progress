import { Card, Title, Flex, Text, RangeBar, Subtitle, Divider, CategoryBar, Grid, Icon } from "@tremor/react";
import ProteinPie from "./proteinPie";
import { IBodyComposition, ITargetSettingData } from "@/app/types/resultsTypes";

interface CurrentStatsProps {
    resultData: ITargetSettingData;
    bodyComposition: IBodyComposition;
}

const CurrentStats = ({ resultData, bodyComposition }: CurrentStatsProps) => {
    const caloriesPerDay = resultData?.metrics[1].metric;
    let caloriesNum = 0;
    if (caloriesPerDay) {
        caloriesNum = parseInt(caloriesPerDay.replace(' kcal', ''));
    };
    const bodyFatPercentage = parseFloat((resultData.metrics[0].metric).replace("%", ""));
    const leanBodyMassValue = Math.round(100 - bodyComposition.bodyFatMass.value).toString();
    let leanBodyMassColor, bodyFatMassColor = 'emerald';

    if (Number(leanBodyMassValue) < bodyComposition.leanBodyMass.min) {
        leanBodyMassColor = 'orange'
    } else if (Number(leanBodyMassValue) > bodyComposition.leanBodyMass.max) {
        leanBodyMassColor = 'rose';
    }

    if ( bodyComposition.bodyFatMass.value < bodyComposition.bodyFatMass.min) {
        bodyFatMassColor = 'orange'
    } else if (bodyComposition.bodyFatMass.value  > bodyComposition.bodyFatMass.max) {
        bodyFatMassColor = 'rose';
    }

    return (
        <Grid numColsSm={1} numColsLg={2} >
            <Card className="max-w-lg">
                <Title style={{ textAlign: "center" }}>{bodyComposition?.category} Body Composition</Title>
                <Divider />
                <Flex>
                    <Subtitle>Body Fat Mass</Subtitle>
                    <Flex alignItems="baseline" justifyContent="end" className="space-x-1">
                        <Text>{Math.round(bodyComposition.bodyFatMass.value)}%</Text>
                    </Flex>
                </Flex>
                <RangeBar
                    percentageValue={Math.round(bodyComposition.bodyFatMass.value)}
                    markerTooltip={Math.round(bodyComposition.bodyFatMass.value).toString()}
                    minPercentageValue={bodyComposition.bodyFatMass.min}
                    maxPercentageValue={bodyComposition.bodyFatMass.max}
                    rangeTooltip={bodyComposition.bodyFatMass.range}
                    className="mt-3"
                    color={bodyFatMassColor}
                />
                <Divider />
                <Flex>
                    <Subtitle>Lean Body Mass</Subtitle>
                    <Flex alignItems="baseline" justifyContent="end" className="space-x-1">
                        <Text>{leanBodyMassValue}%</Text>
                    </Flex>
                </Flex>
                <RangeBar
                    percentageValue={100 - Math.round(bodyComposition.bodyFatMass.value)}
                    markerTooltip={leanBodyMassValue}
                    minPercentageValue={bodyComposition.leanBodyMass.min}
                    maxPercentageValue={bodyComposition.leanBodyMass.max}
                    rangeTooltip={bodyComposition.leanBodyMass.range}
                    className="mt-3"
                    color={leanBodyMassColor}
                />
                <Divider />
                <Flex>
                    <Subtitle>Body Fat %</Subtitle>
                    <Text>{bodyFatPercentage}%</Text>
                </Flex>
                <CategoryBar
                    categoryPercentageValues={[10, 10, 10, 70]}
                    showAnimation={true}
                    colors={["orange", "emerald", "yellow", "rose"]}
                    percentageValue={bodyFatPercentage}
                />
                <Divider />
                <Flex>
                    <Subtitle>BMI</Subtitle>
                    <Text>{Math.round(Number(bodyComposition.bmi))}</Text>
                </Flex>
                <CategoryBar
                    categoryPercentageValues={[18, 7, 5, 4, 66]}
                    showAnimation={true}
                    colors={["orange", "emerald", "yellow", "rose", "red"]}
                    percentageValue={Number(bodyComposition.bmi)}
                />
            </Card>
            {caloriesNum && <ProteinPie caloriesPerDay={caloriesNum} />}
        </Grid>
    );
};

export default CurrentStats;