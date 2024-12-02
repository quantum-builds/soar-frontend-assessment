import React from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";

const AreaChartComponent = () => {
  const options: ApexCharts.ApexOptions = {
    series: [
      {
        name: "Balance",
        data: [120, 280, 480, 780, 220, 580, 230, 600], // Sample data
      },
    ],
    chart: {
      height: 280,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", ""], // X-axis categories
      labels: {
        style: {
          colors: "#555",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#555", // Change axis label color if necessary
        },
      },
      axisBorder: {
        show: false, // Optionally hide the axis border
      },
      axisTicks: {
        show: false, // Optionally hide axis ticks
      },
    },
    grid: {
      show: true,
      borderColor: "#e0e0e0",
      strokeDashArray: 4,
      position: "back",
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      x: {
        format: "MM",
      },
      y: {
        formatter: function (val) {
          return val + " units";
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg p-5 rounded-3xl">
      <ReactApexChart
        options={options}
        series={options.series}
        type="area"
        height={280}
      />
    </div>
  );
};

export default AreaChartComponent;
