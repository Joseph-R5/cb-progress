import { Card, Title, AreaChart, Text } from "@tremor/react";



const WeightGraph = () => (
  <Card className="mt-8">
    <Title>Expected Weight goes here</Title>
    <Text>Comparison between Sales and Profit</Text>
    {/* <AreaChart
      className="mt-4 h-80"
      // data={data}
      categories={['Mild', 'Recommended', 'Extreme']}
      index="Date"
      colors={['indigo', 'fuchsia']}
    /> */}
  </Card>
);

export default WeightGraph;