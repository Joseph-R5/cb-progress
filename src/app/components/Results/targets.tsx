import { Grid, Card, Flex, Text, Metric } from "@tremor/react";

const Targets = ({ resultData }: { resultData: any }) => {
    return (
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
    );
};

export default Targets;