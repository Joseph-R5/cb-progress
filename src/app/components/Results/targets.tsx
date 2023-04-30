import { Grid, Card, Flex, Text, Metric, Icon, Col } from "@tremor/react";
import { CalendarIcon, ChartBarIcon, SunIcon } from "@heroicons/react/solid";
import { IMetricData, ITargetSettingData } from "@/app/types/resultsTypes";

interface TargetsProps {
    resultData: ITargetSettingData
}

const Targets = ({ resultData }: TargetsProps) => {
    return (
        <Grid numColsSm={2} numColsLg={3}>
            {resultData?.metrics.map((item: IMetricData) => {
                return (
                    <Card key={item.title} style={{ marginBottom: "1.25rem", marginRight: "0.5rem" }}>
                        <Flex alignItems="center">
                            <Text style={{ textAlign: 'center' }}>{item.title}</Text>
                        </Flex>
                        <Flex
                            className="space-x-3 truncate"
                            justifyContent="start"
                            alignItems="baseline"
                        >
                            {item.title === 'Body Fat Percentage' && <Icon size="lg" icon={SunIcon} />}
                            {item.title === 'Target Weight date' && <Icon size="lg" icon={CalendarIcon} />}
                            {item.title === 'Target Kcal per day' && <Icon size="lg" icon={ChartBarIcon} />}
                            <Metric>{item.metric}</Metric>
                            {item.metricPrev && <Text className="truncate">{item.metricPrev}</Text>}
                        </Flex>
                    </Card>
                );
            })}
        </Grid>
    );
};

export default Targets;