import React, { useEffect, useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import "./LineChart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const fullBorderPlugin = {
  id: "fullBorder",
  afterDraw: (chart) => {
    const {
      ctx,
      chartArea: { top, bottom, left, right },
    } = chart;

    ctx.save();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = "#D3D3D3";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(Math.floor(left) + 0.5, Math.floor(top) + 0.5);
    ctx.lineTo(Math.floor(right) - 0.5, Math.floor(top) + 0.5);
    ctx.lineTo(Math.floor(right) - 0.5, Math.floor(bottom) - 0.5);
    ctx.lineTo(Math.floor(left) + 0.5, Math.floor(bottom) - 0.5);
    ctx.lineTo(Math.floor(left) + 0.5, Math.floor(top) + 0.5);
    ctx.stroke();
    ctx.restore();
  },
};

export default function LineChart() {
  const [data, setData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const chartData = {
      labels: ["شهریور", "مرداد", "تیر", "خرداد", "اردیبهشت", "فروردین"],
      datasets: [
        {
          label: "بازرسی نوع اول",
          data: [120, 160, 130, 110, 180, 90],
          borderColor: "#355EB1",
          pointStyle: "circle",
          fill: false,
          borderWidth: 2,
          tension: 0.5,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: "#355EB1",
        },
        {
          label: "بازرسی نوع دوم",
          data: [100, 140, 170, 90, 150, 70],
          borderColor: "#2C7BF3",
          pointStyle: "circle",
          fill: false,
          borderWidth: 2,
          tension: 0.5,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: "#2C7BF3",
        },
      ],
    };

    setData(chartData);
  }, []);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    layout: { padding: 10 },
    scales: {
      x: {
        offset: true,
        ticks: {
          font: { family: "vazir", size: 12 },
        },
        grid: { display: true, drawBorder: false, drawTicks: false },
        border: { dash: [4, 4], display: true },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 200,
        ticks: {
          maxTicksLimit: 5,
          callback: (value) => value.toLocaleString("fa-IR"),
          padding: 15,
          color: "#3A3A3A",
          font: { family: "Vazir", size: 13, weight: "500" },
        },
        grid: { display: true, drawBorder: false, drawTicks: false },
        border: { dash: [4, 4], display: true },
      },
    },
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
      datalabels: { display: false },
    },
  };

  return (
    <div className="insp-homeChart">
      <div className="insp-homeChart__line">
        {data && (
          <Line
            ref={chartRef}
            data={data}
            options={options}
            plugins={[fullBorderPlugin]}
          />
        )}
      </div>
      <div className="insp-homeChart__legend">
        <div className="insp-homeChart__legend__node">
          <p className="insp-homeChart__legend__text">خرید محصول</p>
          <img
            src="/assets/home/line-chart/LegendNode-purple.svg"
            alt="Legend Icon"
            className="insp-homeChart__legend__icon"
          />
        </div>
        <div className="insp-homeChart__legend__node">
          <p className="insp-homeChart__legend__text">مشاهده محصول</p>
          <img
            src="/assets/home/line-chart/LegendNode-blue.svg"
            alt="Legend Icon"
            className="insp-homeChart__legend__icon"
          />
        </div>
      </div>
    </div>
  );
}
