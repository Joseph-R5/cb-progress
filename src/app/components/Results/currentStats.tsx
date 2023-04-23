import { BarList, Card, Title, Bold, Flex, Text, RangeBar, CategoryBar, Subtitle, Divider, DeltaBar } from "@tremor/react";
import ProteinPie from "./proteinPie";

const CurrentStats = ({ resultData, bodyComposition }: any) => {
    const caloriesPerDay = resultData?.metrics[1].metric;
    let caloriesNum = 0;
    if (caloriesPerDay) {
        caloriesNum = parseInt(caloriesPerDay.replace(' kcal', ''));
    };

    console.log('bodyComposition', bodyComposition);

    // TODO seperate this into more components
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
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
                    color="emerald"
                />
                <Divider />
                <Flex>
                    <Subtitle>Lean Body Mass</Subtitle>
                    <Flex alignItems="baseline" justifyContent="end" className="space-x-1">
                        <Text>{Math.round(100 - bodyComposition.bodyFatMass.value).toString()}%</Text>
                    </Flex>
                </Flex>
                <RangeBar
                    percentageValue={100 - Math.round(bodyComposition.bodyFatMass.value)}
                    markerTooltip={Math.round(100 - bodyComposition.bodyFatMass.value).toString()}
                    minPercentageValue={bodyComposition.leanBodyMass.min}
                    maxPercentageValue={bodyComposition.leanBodyMass.max}
                    rangeTooltip={bodyComposition.leanBodyMass.range}
                    className="mt-3"
                    color="emerald"
                />
                <Divider />
                <Flex>
                    <Subtitle>Body Fat %</Subtitle>
                </Flex>
                <CategoryBar
                    categoryPercentageValues={[10, 10, 10, 70]}
                    showAnimation={true}
                    colors={["orange", "emerald", "yellow", "rose"]}
                    percentageValue={resultData.BODY_FAT}
                />
                <Divider />
                <Flex>
                    <Subtitle>BMI</Subtitle>
                </Flex>
                <DeltaBar
                    percentageValue={45}
                    isIncreasePositive={false}
                    className="mt-3"
                />
                <Divider />
            </Card>
            {caloriesNum && <ProteinPie caloriesPerDay={caloriesNum} />}
        </div>
    );
};

export default CurrentStats;