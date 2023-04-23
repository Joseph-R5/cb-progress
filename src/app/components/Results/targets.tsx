import { Grid, Card, Flex, Text, Metric, Icon } from "@tremor/react";
import { CalendarIcon, ScaleIcon } from "@heroicons/react/solid";

const Targets = ({ resultData }: { resultData: any }) => {
    return (
        <Grid className="gap-6" numColsSm={2} numColsLg={3}>
            {resultData?.metrics.map((item: any) => {
                console.log('item', item)
                return (
                    <Card key={item.title} style={{ marginBottom: "1.25rem", marginRight: "0.5rem" }}>
                        <Flex alignItems="start">
                            <Text>{item.title}</Text>
                        </Flex>
                        <Flex
                            className="space-x-3 truncate"
                            justifyContent="start"
                            alignItems="baseline"
                        >
                            {item.title === 'Target Weight date' && <Icon size="lg" icon={CalendarIcon} />}
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