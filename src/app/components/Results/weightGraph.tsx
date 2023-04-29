import { getAreaGraphData } from "@/app/utils/generateAreaGraphData";
import { Card, Title, AreaChart } from "@tremor/react";

const WeightGraph = ({ results }: { results: any }) => {
  const data = getAreaGraphData(results);

  const minValue = data[0]?.Mild - 2;
  const maxValue = data[4]?.Extreme + 2;

  return (
    <Card className="mt-8" style={{ marginTop: "1.25rem"}}>
      <Title style={{textAlign: 'center'}}>Weight Over Time</Title>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        index="date"
        categories={['Mild', 'Recommended', 'Extreme']}
        colors={["fuchsia", "indigo",  "cyan"]}
        showAnimation={true}
        showGradient={false}
        showGridLines={false}
        minValue={minValue}
        maxValue={maxValue}
      />
    </Card>
  );
};

export default WeightGraph;
