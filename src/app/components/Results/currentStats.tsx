import { Card, Title, Flex, Text, RangeBar, Subtitle, Divider, CategoryBar } from "@tremor/react";
import ProteinPie from "./proteinPie";

const CurrentStats = ({ resultData, bodyComposition }: any) => {
    const caloriesPerDay = resultData?.metrics[1].metric;
    let caloriesNum = 0;
    if (caloriesPerDay) {
        caloriesNum = parseInt(caloriesPerDay.replace(' kcal', ''));
    };
    const bodyFatPercentage = parseFloat((resultData.metrics[0].metric).replace("%", ""));
    const leanBodyMassValue = Math.round(100 - bodyComposition.bodyFatMass.value).toString();
    let leanBodyMassColor, bodyFatMassColor = 'emerald';
    if ( leanBodyMassValue < bodyComposition.leanBodyMass.min) {
        leanBodyMassColor = 'orange'
    } else if (leanBodyMassValue > bodyComposition.leanBodyMass.max) {
        leanBodyMassColor = 'rose';
    }

    console.log('bodyComposition.bodyFatMass.value ', bodyComposition.bodyFatMass.value );
    console.log(' bodyComposition.bodyFatMass.min', bodyComposition.bodyFatMass.min);
    console.log(' bodyComposition.bodyFatMass.max', bodyComposition.bodyFatMass.max);

    if ( bodyComposition.bodyFatMass.value < bodyComposition.bodyFatMass.min) {
        bodyFatMassColor = 'orange'
    } else if (bodyComposition.bodyFatMass.value  > bodyComposition.bodyFatMass.max) {
        bodyFatMassColor = 'rose';
    }

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
                    <Text>{Math.round(bodyComposition.bmi)}</Text>
                </Flex>
                <CategoryBar
                    categoryPercentageValues={[18, 7, 5, 4, 66]}
                    showAnimation={true}
                    colors={["orange", "emerald", "yellow", "rose", "red"]}
                    percentageValue={bodyComposition.bmi}
                />
            </Card>
            {caloriesNum && <ProteinPie caloriesPerDay={caloriesNum} />}
        </div>
    );
};

export default CurrentStats;