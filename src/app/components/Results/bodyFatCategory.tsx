import { Grid, Flex, Metric, Card, CategoryBar, Text, Toggle, ToggleItem } from "@tremor/react";

const BodyFatCategory = ({ results, setSetting }: { results: any, setSetting: any }) => {
    return (
        <Grid className="gap-6 mx-auto">
            <Card className="max-w-sm mx-auto">
            <Flex alignItems="center" justifyContent='center'>
                <Metric> We Recommend You Start {results.CUT ? 'Cutting 🔪' : 'Bulking 💪'} </Metric>
            </Flex>
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