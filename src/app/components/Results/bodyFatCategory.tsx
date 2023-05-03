import { SettingType } from "@/app/types/settingTypes";
import { IResults } from "@/app/types/resultsTypes";
import { Grid, Flex, Metric, Card, Toggle, ToggleItem } from "@tremor/react";

interface BodyFatCateogryProps {
    results: IResults;
    setSetting: (value: SettingType) => void;
};

const BodyFatCategory = ({ results, setSetting }: BodyFatCateogryProps) => {
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