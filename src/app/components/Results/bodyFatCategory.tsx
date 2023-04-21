import { Grid, Flex, Metric, Card, CategoryBar, Text, Toggle, ToggleItem } from "@tremor/react";

const BodyFatCategory = ({ results, setSetting }: { results: any, setSetting: any }) => {
    return (
        <Grid className="gap-6 mx-auto">
            <Flex alignItems="center" justifyContent='center'>
                <Metric> We recommend you start {results.CUT ? 'cutting' : 'bulking'} </Metric>
                {/* <Button>Start Again</Button> */}
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
    )
};

export default BodyFatCategory;