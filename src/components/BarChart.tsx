import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const [chartOptions, setChartOptions] = useState<ApexCharts.ApexOptions>({
    series: [
      {
        name: "Withdraw",
        data: [480, 350, 330, 480, 160, 390, 400],
      },
      {
        name: "Deposit",
        data: [240, 130, 270, 380, 240, 240, 340],
      },
    ],
    chart: {
      type: "bar",
      height: 250,
      toolbar: {
        show: false,
      },
    },
    colors: ["#232323", "#396AFF"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        borderRadius: 7, // Default value for large screens
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    yaxis: {
      title: {
        text: "",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  });

  // Hook to adjust bar radius based on screen size
  useEffect(() => {
    const updateRadius = () => {
      const screenWidth = window.innerWidth;
      setChartOptions((prevOptions) => ({
        ...prevOptions,
        plotOptions: {
          ...prevOptions.plotOptions,
          bar: {
            ...prevOptions.plotOptions?.bar,
            borderRadius: screenWidth < 768 ? 4 : 7, // Smaller radius for small screens
          },
        },
      }));
    };

    updateRadius(); // Call it initially
    window.addEventListener("resize", updateRadius); // Update on resize

    return () => {
      window.removeEventListener("resize", updateRadius); // Cleanup listener
    };
  }, []);

  return (
    <div className="bg-white shadow-lg p-5 rounded-3xl">
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default BarChart;
