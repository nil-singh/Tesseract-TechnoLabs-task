import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const CandleChart = () => {
  const [chartData, setChartData] = useState("");
  useEffect(() => {
    fetch(
      "https://financialmodelingprep.com/api/v3/historical-chart/1hour/AAPL?apikey=b1360803f80dd08bdd0211c5c004ad03",
      { method: "GET" }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setChartData(
          res &&
            res.map((data) => {
              const date = new Date(data.date);
              return {
                x: date.valueOf(),
                y: [data.open, data.high, data.low, data.close],
              };
            })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(chartData);
  }, [chartData]);

  const options = {
    chart: {
      id: "basic-bar",
    },
  };

  const plotOptions = {
    candlestick: {
      colors: {
        upward: "#3C90EB",
        downward: "#DF7D46",
      },
      wick: {
        useFillColor: true,
      },
    },
  };

  return (
    <div className="app-1" >
      <div className="row">
        {chartData && (
          <div className="mixed-chart">
            <Chart
              options={options}
              series={[
                {
                  data: chartData,
                },
              ]}
              type="candlestick"
              width="500"
              plotOptions={plotOptions}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CandleChart;