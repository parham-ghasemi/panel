import "./ProductsCard.scss";

const ProductsCard = ({ card }) => {
  return (
    <div className="products-card">
      <div className="products-card__top">
        <img src={card.img} alt="card-img" />
      </div>
      <div className="products-card__middle">
        <p className="products-card__middle__title">{card.title}</p>
        <p className="products-card__middle__tran-title">
          {card.translatedTitle}
        </p>
        <p className="products-card__middle__price">
          {` ${card.price.toLocaleString("ar-EG")} تومان `}
        </p>
      </div>
      <div className="products-card__bottom">
        <div className="products-card__bottom__rating-container">
          <p className="products-card__bottom__rating-container__remaining">
            {`${card.remaining} عدد موجود`}
          </p>
          <p className="products-card__bottom__rating-container__rating">
            <img src="/assets/home/star.svg" alt="star" />
            {card.rating}
          </p>
        </div>

        <div className="products-card__bottom__remaining-container">
          <div className="products-card__bottom__remaining-container__title">
            <p>{`50% فروخته شده`}</p>
            <p>{`50% باقی مانده`}</p>
          </div>
          <div className="products-card__bottom__remaining-container__bar-container">
            <div
              className="products-card__bottom__remaining-container__bar-container__bar"
              style={{ width: `${card.soldPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
