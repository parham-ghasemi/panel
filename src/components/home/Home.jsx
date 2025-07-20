import Card from "./card/Card";
import "./Home.scss";
import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
import { cardsData, barChartData, productCards, lineChartData } from "./Data";
import BarChart from "./barChart/BarChart";
import LineChart from "./lineChart/LineChart";
import ProductsCard from "./productsCard/ProductsCard";

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
          <LineChart lineChartData={lineChartData}/>
        </div>
        <div className="home-container__charts-container__bar-chart">
          <BarChart data={barChartData} />
        </div>
      </div>

      <div className="home-container__products-card">
        <p className="home-container__products-card__title">
          <img src="/assets/home/Polygon.svg" alt="Polygon" />
          پرفروش‌ترین محصولات
          <span className="home-container__products-card__title__more">
            <img src="/assets/home/CgMoreVertical.svg" alt="Polygon" />
          </span>
        </p>
        <p className="home-container__products-card__row">
          {productCards.map((item, index) => (
            <ProductsCard card={item} key={`product-card-${index}`} />
          ))}
        </p>
      </div>
    </div>
  );
};

export default Home;
