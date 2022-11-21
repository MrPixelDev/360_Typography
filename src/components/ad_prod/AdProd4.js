import React from "react";

export const AdProd4 = () => {
  return (
    <div className="ad_prod__container container">
      <div className="title_block">
        <div className="title_block--center">
          <h2 className="title_block__h2">Почему стоит выбрать нас?</h2>
          <p className="title_block__description"></p>
        </div>
      </div>
      <div className="item_row">
        <div className="item_row__flexbox">
          <div className="item__no-stretch--adpr4 item__no-stretch">
            <div className="item__howmuch">
              <h2>{">"}7</h2>
            </div>
            <div className="item__ofwhat">
              <p>Лет</p>
            </div>
          </div>
          <div className="item__no-stretch--adpr4 item__no-stretch">
            <div className="item__howmuch">
              <h2>{">"}500</h2>
            </div>
            <div className="item__ofwhat">
              <p>Клиентов</p>
            </div>
          </div>
          <div className="item__no-stretch--adpr4 item__no-stretch">
            <div className="item__howmuch">
              <h2>{">"}5000</h2>
            </div>
            <div className="item__ofwhat">
              <p>Проектов</p>
            </div>
          </div>
          <div className="item__no-stretch--adpr4 item__no-stretch">
            <div className="item__howmuch">
              <h2>{">"}200 000</h2>
            </div>
            <div className="item__ofwhat">
              <p>Кв.м баннера</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
