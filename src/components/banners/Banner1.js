import React from "react";

export const Banner1 = () => {
  return (
    <div className="content_banner banner">
      <div className="transparent_layer--70 transparent_layer">
        <div className="banner__container container">
          <div className="banner__text--title">
            <h2>Торопитесь, скидка 20% до конца месяца!</h2>
          </div>
          <div className="banner__text--content">
            <h3>
              Скидка — сумма, на которую снижается продажная цена товара,
              реализуемого покупателю. Исторически скидки появились и стали
              использоваться в условиях уличной торговли товарами, когда
              продавец в результате торга предоставлял скидку тому покупателю,
              который приобретает больше товаров.
            </h3>
          </div>
          <a href="#phone">
            <button className="button--about button">Подробнее</button>
          </a>
        </div>
      </div>
    </div>
  );
};
