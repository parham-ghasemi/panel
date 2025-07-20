import Card from "./card/Card";
import "./Home.scss";
import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
import { cardsData, barChartData } from "./Data";
import BarChart from "./barChart/BarChart";
import LineChart from "./lineChart/LineChart";

const Home = () => {
  return (
    <div className="home-container">
      <BreadCrumb icon="/assets/home/home-blue.svg" />
      <div className="home-container__cards-container">
        {cardsData.map((card, index) => (
          <Card data={card} index={index} key={`card-${index}`} />
        ))}
      </div>
      <div className="home-container__charts-container">
        <div className="home-container__charts-container__line-chart">
          <LineChart />
        </div>
        <div className="home-container__charts-container__bar-chart">
          <BarChart data={barChartData}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
