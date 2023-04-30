import { getMacros } from "@/app/utils/calculateMacros";
import { Callout, Card, DonutChart, Flex, Text, Title } from "@tremor/react";
import { HeartIcon, LightBulbIcon, TrashIcon } from "@heroicons/react/solid";

const ProteinPie = ({ caloriesPerDay }: { caloriesPerDay: number }) => {
    return (
        <Card className="max-w-lg">
            <Title style={{ textAlign: "center" }}>
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
                <Callout
                    className="mt-4"
                    title="Stay hydrated"
                    icon={HeartIcon}
                    color="slate"
                >
                    Aim for at least 8 glasses of water per day and try to limit sugary drinks like soda and juice.
                </Callout>
                <Callout
                    className="mt-4"
                    title="Focus on whole foods"
                    icon={LightBulbIcon}
                    color="slate"
                >
                Choose foods that are minimally processed and contain natural ingredients.
                </Callout>
                <Callout
                    className="mt-4"
                    title="Get enough fiber"
                    icon={TrashIcon}
                    color="slate"
                >
                Fiber is an essential nurtirent that can help regulate digestion, blood sugar and promte feelings of fullness.
                </Callout>

        </Card>
    )
};

export default ProteinPie;