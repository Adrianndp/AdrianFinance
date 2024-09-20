import * as echarts from "echarts";
import React from "react";
import ReactECharts from "echarts-for-react";

type EChartsOption = echarts.EChartsOption;

const SemiGauge: React.FC<{ title: string; data: number }> = ({
  title,
  data,
}) => {
  const option: EChartsOption = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "75%"],
        radius: "90%",
        min: 0,
        max: 1,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 6,
            color: [
              [0.25, "#FF6E76"],
              [0.5, "#FDDD60"],
              [0.75, "#58D9F9"],
              [1, "#7CFFB2"],
            ],
          },
        },
        pointer: {
          icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
          length: "12%",
          width: 20,
          offsetCenter: [0, "-60%"],
          itemStyle: {
            color: "auto",
          },
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: "auto",
            width: 2,
          },
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: "auto",
            width: 5,
          },
        },
        axisLabel: {
          color: "#464646",
          fontSize: 20,
          distance: -60,
          rotate: "tangential",
          formatter: function (value: number) {
            if (value === 0.875) {
              return "Strong Buy";
            } else if (value === 0.625) {
              return "Buy";
            } else if (value === 0.375) {
              return "Sell";
            } else if (value === 0.125) {
              return "Strong Sell";
            }
            return "";
          },
        },
        title: {
          offsetCenter: [0, "-10%"],
          fontSize: 20,
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, "-35%"],
          valueAnimation: true,
          formatter: function (value: number) {
            return Math.round(value * 100) + "";
          },
          color: "inherit",
        },
        data: [
          {
            value: data, // Dynamic data from props
            name: title, // Dynamic title from props
          },
        ],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      notMerge={true}
      lazyUpdate={true}
      theme={"light"}
    />
  );
};

export default SemiGauge;
