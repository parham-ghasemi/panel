import { useEffect, useState } from "react";
import "./BarChart.scss";

const BarChart = ({ data }) => {
  const [animated, setAnimated] = useState(false);

  const hexToRgb = (hex) => {
    hex = hex.replace("#", "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };

  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(true), 100); // small delay for smooth animation
    return () => clearTimeout(timeout);
  }, []);

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
          <div className="chart__rows-container__bar-background">
            {[...Array(6)].map((_, i) => (
              <div key={i} />
            ))}
          </div>
          {data.map((item, index) => (
            <div key={index} className="chart__rows-container__row">
              <div className="chart__rows-container__row__bar-wrapper">
                <div className="chart__rows-container__row__bar-container">
                  <div
                    className={`chart__rows-container__row__bar-container__bar`}
                    style={{
                      width: animated ? `${item.value}%` : `0%`,
                      "--bar-color": item.color,
                      "--bar-color-rgb": hexToRgb(item.color),
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
          <div key={index} className="chart__legend-container__item">
            <span style={{ backgroundColor: item.color }}></span>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
