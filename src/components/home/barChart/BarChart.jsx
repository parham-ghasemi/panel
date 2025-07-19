import React from "react";
import "./BarChart.scss";

const data = [
  { name: "دماسنج", value: 32, color: "#61CE70" },
  { name: "دارو", value: 49.24, color: "#FF928A" },
  { name: "دارو", value: 58.29, color: "#003566" },
  { name: "بالشت طبی", value: 60, color: "#2C7BF3" },
];

const BarChart = () => {
  return (
    <div className="chart">
      <div className="chart__ticks">
        {[0, 20, 40, 60, 80, 100].map((value) => (
          <div key={value} className="chart__ticks__tick">
            {value}%
          </div>
        ))}
      </div>

      <div className="chart__middle">
        <div className="chart__rows-container">
          {data.map((item, index) => (
            <div key={index} className="chart__rows-container__row">
              <div className="chart__rows-container__row__bar-wrapper">
                <div className="chart__rows-container__row__bar-background">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} />
                  ))}
                </div>
                <div className="chart__rows-container__row__bar-container">
                  <div
                    className="chart__rows-container__row__bar-container__bar"
                    style={{
                      width: `${item.value}%`,
                      backgroundColor: `${item.color}80`,
                    }}
                  >
                    <span
                      className={`chart__rows-container__row__bar-container__bar__value ${
                        item.value < 20
                          ? "chart__rows-container__row__bar-container__bar__value--outside"
                          : ""
                      }`}
                    >
                      {item.value}
                    </span>
                    <div
                      className="chart__rows-container__row__bar-container__bar__line"
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="chart__label">
          <p>کالاهای در حال اتمام</p>
        </div>
      </div>

      <div className="chart__legend-container">
        {data.map((item, index) => (
          <div className="chart__legend-container__item">
            <span style={{ backgroundColor: item.color }}></span>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
