import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      width: 380,
      height: 250,
      type: "pie",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 3,
        blur: 5,
        opacity: 0.3,
      },
    },
    labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        expandOnClick: true,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10,
        },
        customScale: 1,
        donut: {
          size: "65%",
        },
      },
    },
    dataLabels: {
      enabled: true, // Enables labels on the pie slices
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        colors: ["#fff"],
      },
      formatter: (
        val: number,
        opt: {
          w: any;
          seriesIndex: number;
        }
      ) => {
        // Display both the percentage and the label
        const label = opt.w.globals.labels[opt.seriesIndex];
        return `${label}: ${val.toFixed(1)}%`;
      },
    },
    colors: ["#FC7900", "#232323", "#396AFF", "#343C6A"],
    legend: {
      show: false,
    },
  };

  const series = [15, 35, 20, 30];

  return (
    <div className="bg-white shadow-lg p-5 rounded-3xl md:h-[305px] flex items-center justify-center">
      <Chart options={options} series={series} type="pie" />
    </div>
  );
};

export default PieChart;
