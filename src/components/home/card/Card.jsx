import "./Card.scss";

const Card = ({ data }) => {
  const { title, content, status, comparisonPercentage, comparisonTime, img } =
    data;

  return (
    <div className="home-card-container">
      <div className="home-card-container__img">
        <img src={img} alt="card-img" />
      </div>
      <div className="home-card-container__txt">
        <div className="home-card-container__txt__top">
          <p className="home-card-container__txt__top__title">{title}</p>
          <p className="home-card-container__txt__top__content">{content}</p>
        </div>
        <p
          className={`home-card-container__txt__comparison ${
            status === "up"
              ? "home-card-container__txt__comparison--up"
              : status === "down"
              ? "home-card-container__txt__comparison--down"
              : ""
          }`}
        >
          {`نسبت به ${comparisonTime} ${comparisonPercentage}`}
          {status === "up" && (
            <img src="/assets/home/trend-up.svg" alt="trend-up" />
          )}
          {status === "down" && (
            <img src="/assets/home/trend-down.svg" alt="trend-down" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Card;
