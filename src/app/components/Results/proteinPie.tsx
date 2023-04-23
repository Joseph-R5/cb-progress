import { getMacros } from "@/app/utils/calculateMacros";
import { Callout, Card, DonutChart, Text, Title } from "@tremor/react";
import { DumbbellIcon, CheckCircleIcon, HeartIcon, LightBulbIcon, TrashIcon } from "@heroicons/react/solid";

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
                Drinking enough water is essential for maintaining good health. Aim for at least 8 glasses of water per day and try to limit sugary drinks like soda and juice.
            </Callout>
            <Callout
                className="mt-4"
                title="Focus on whole foods"
                icon={LightBulbIcon}
                color="slate"
            >
               Choose foods that are minimally processed and contain natural ingredients. Whole foods like fruits, vegetables, whole grains, lean proteins, and healthy fats are packed with essential nutrients that your body needs.
            </Callout>
            <Callout
                className="mt-4"
                title="Get enough fiber"
                icon={TrashIcon}
                color="slate"
            >
                Fiber is an essential nutrient that can help regulate digestion, control blood sugar, and promote feelings of fullness. Try to include plenty of high-fiber foods like fruits, vegetables, whole grains, and legumes in your diet.
            </Callout>
        </Card>
    )
};

export default ProteinPie;