import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const BasicChart: React.FC<any> = ({ data }) => {
  if (data === undefined || data === null || !Array.isArray(data)) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  const chartOptions: ApexOptions = {
    chart: {
      type: "candlestick",
      height: 350,
      width: 700,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      decimalsInFloat: 0,
      tooltip: {
        enabled: true,
      },
    },
  };

  const chartSeries = [
    {
      data: data,
    },
  ];

  return (
    <Chart options={chartOptions} series={chartSeries} type="candlestick" />
  );
};

export default BasicChart;
