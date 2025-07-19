import Card from "./card/Card";
import "./Home.scss";
import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
import { cardsData } from "./Data";
import BarChart from "./barChart/BarChart"

const Home = () => {
  return (
    <div className="home-container">
      <BreadCrumb icon="/assets/home/home-blue.svg" />
      <div className="home-container__cards-container">
        {cardsData.map((card, index) => (
          <Card data={card} index={index} />
        ))}
      </div>
      <div className="home-container__charts-container">
        <div className="home-container__charts-container__chart">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
