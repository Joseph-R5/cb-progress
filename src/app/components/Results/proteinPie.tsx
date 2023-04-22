import { getMacros } from "@/app/utils/calculateMacros";
import { Card, DonutChart, Text, Title } from "@tremor/react";

const ProteinPie = ({ caloriesPerDay }: { caloriesPerDay: number }) => {
    return (
        <Card className="max-w-lg">
            <Title style={{textAlign:"center"}}>
                Macros 
              <Text>grams</Text>
            </Title>
            <DonutChart
                className="mt-6"
                data={getMacros(caloriesPerDay)}
                category="amount"
                index="type"
                showAnimation={true}
                variant="pie"
                showLabel={true}
                colors={["violet", "indigo", "rose", "cyan", "amber"]}
            />
        </Card>
    )
};

export default ProteinPie;