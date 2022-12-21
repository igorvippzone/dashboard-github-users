import React from 'react'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);
interface IProps {
  data: { value: string | number; label: string }[];
}

const Doughut2D: React.FC<IProps> = ({data}) => {
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Популярные языки",
        decimals: 0,
        doughnutRadius: '45%',
        showPercentValues: 0,
        theme: 'candy'
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
}

export default Doughut2D