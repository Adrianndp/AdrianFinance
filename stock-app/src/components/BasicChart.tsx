import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const BasicChart: React.FC<any> = ({ data }) => {
  if (!data) {
    return <div>No data to display</div>;
  }
  const chartOptions: ApexOptions = {
    chart: {
      type: "candlestick",
      height: 350,
      width: 700,
    },
    title: {
      text: "Sample Stock Prices Chart",
      align: "left",
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
    <div className="app">
      <div className="row">
        <div id="demo" className="mixed-chart">
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="candlestick"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicChart;
