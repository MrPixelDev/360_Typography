import React from "react";

export const AdProd2 = () => {
  const modalTrigger = () => {
    let modalElement = document.getElementById("modalorder");
    getComputedStyle(modalElement).display === "block"
      ? (modalElement.style.display = "none")
      : (modalElement.style.display = "block");
  };
  return (
    <div className="ad_prod__container container">
      <div className="title_block">
        <div className="title_block--center">
          <h2 className="title_block__h2">Наши услуги</h2>
          <p className="title_block__description">Посмотрите на наш каталог</p>
        </div>
      </div>
      <div className="item_row">
        <div className="item_row__flexbox">
          <div className="item__no-stretch">
            <div className="item__img">
              <img
                src="./img/features/ct_block_item_135701_1_5_image_uNtnMMum.png"
                alt=""
              />
            </div>
            <div className="item__title">
              <h2>Расклейка объявлений</h2>
            </div>
            <div className="item__price">
              <h3>от 2,5 руб.</h3>
            </div>
            <div className="item__description">
              <p>Расклейка объявлений по различным людным местам</p>
            </div>
            <button onClick={modalTrigger} className="button_order button">
              ЗАКАЗАТЬ
            </button>
          </div>

          <div className="item__no-stretch">
            <div className="item__img">
              <img
                src="./img/features/ct_block_item_135701_78366_5_image_BNKUuvry.png"
                alt=""
              />
            </div>
            <div className="item__title">
              <h2>Листовки по почтовым ящикам</h2>
            </div>
            <div className="item__price">
              <h3>от 0,7 руб.</h3>
            </div>
            <div className="item__description">
              <p>
                Распространение полиграфической продукции в любом районе города
              </p>
            </div>
            <button onClick={modalTrigger} className="button_order button">
              ЗАКАЗАТЬ
            </button>
          </div>

          <div className="item__no-stretch">
            <div className="item__img">
              <img
                src="./img/features/ct_block_item_135701_2_5_image_u7TJdWWr.png"
                alt=""
              />
            </div>
            <div className="item__title">
              <h2>Раздача листовок</h2>
            </div>
            <div className="item__price">
              <h3>от 1 руб.</h3>
            </div>
            <div className="item__description">
              <p>
                Мы работаем в сфере promotion уже несколько лет и поможем
                увеличить конверсию на улицах города!
              </p>
            </div>
            <button onClick={modalTrigger} className="button_order button">
              ЗАКАЗАТЬ
            </button>
          </div>

          <div className="item__no-stretch">
            <div className="item__img">
              <img
                src="./img/features/ct_block_item_135701_36007_5_image_Oa1CIllq.png"
                alt=""
              />
            </div>
            <div className="item__title">
              <h2>Реклама на асфальте</h2>
            </div>
            <div className="item__price">
              <h3>от 100 руб.</h3>
            </div>
            <div className="item__description">
              <p>
                Наша компания имеет большой опыт нанесения рисунков на любую
                поверхность.
              </p>
            </div>
            <button onClick={modalTrigger} className="button_order button">
              ЗАКАЗАТЬ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
