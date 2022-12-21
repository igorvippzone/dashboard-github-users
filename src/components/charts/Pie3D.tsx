import React from "react";
import ReactFC from "react-fusioncharts";

interface IProps {
  data: { value: string | number; label: string }[];
}

const Pie3D: React.FC<IProps> = ({ data }) => {
  const chartConfigs = {
    type: "pie3D", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Языки программирования",
        decimals: 0,
        pieRadius: '80%',
        theme: "fusion",
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;
