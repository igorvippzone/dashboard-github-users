import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

interface IProps {
  data: { value: string | number; label: string }[];
}

const Bar3D: React.FC<IProps> = ({ data }) => {
  const chartConfigs = {
    type: "bar3D", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Попделились ",
        theme: "candy",
        yAxisName: "Звёзды",
        xAxisName: "Репозитории",
        yAxisNameFontSize: "18px",
        xAxisNameFontSize: "18px",
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Bar3D;
