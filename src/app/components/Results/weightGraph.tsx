import { getAreaGraphData } from "@/app/utils/generateAreaGraphData";
import { Card, Title, AreaChart } from "@tremor/react";

const WeightGraph = ({ results }: { results: any }) => {
  const data = getAreaGraphData(results);

  return (
    <Card className="mt-8" style={{ marginTop: "1.25rem"}}>
      <Title style={{textAlign: 'center'}}>Weight Over Time</Title>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        index="date"
        categories={['Mild', 'Recommended', 'Extreme']}
        colors={["indigo", "fuchsia", "cyan"]}
        showAnimation={true}
        showGradient={false}
        showGridLines={false}
        minValue={66} // TODO
        maxValue={76}
      />
    </Card>
  );
};

export default WeightGraph;
