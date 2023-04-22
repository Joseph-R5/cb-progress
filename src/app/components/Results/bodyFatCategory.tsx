import { Grid, Flex, Metric, Card, CategoryBar, Text, Toggle, ToggleItem } from "@tremor/react";

const BodyFatCategory = ({ results, setSetting }: { results: any, setSetting: any }) => {
    return (
        <Grid className="gap-6 mx-auto">
            <Flex alignItems="center" justifyContent='center' style={{marginBottom: "1.25rem"}}>
                <Metric> We Recommend You Start {results.CUT ? 'Cutting 🔪' : 'Bulking 💪'} </Metric>

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
                style={{marginTop: "0.75rem"}}
            >
                <ToggleItem value="1" text="Mild" onClick={() => setSetting('mild')} />
                <ToggleItem value="2" text="Recommended" onClick={() => setSetting('recommended')} />
                <ToggleItem value="3" text="Extreme" onClick={() => setSetting('extreme')} />
            </Toggle>
        </Grid>
    )
};

export default BodyFatCategory;