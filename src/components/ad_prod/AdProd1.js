import { React, useState, useEffect } from "react";
import { ModalOrder } from "../Modals";

export const AdProd1 = () => {
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
          <h2 className="title_block__h2">Рекламная продукция</h2>
          <p className="title_block__description">Посмотрите на наш каталог</p>
        </div>
      </div>
      <div className="item_row">
        <div className="item_row__flexbox">
          <div className="item__no-stretch">
            <div className="item__img">
              <img
                src="./img/features/ct_block_item_135700_1_5_image_mpuJJf8c.png"
                alt=""
              />
            </div>
            <div className="item__title">
              <h2>Наклейки</h2>
            </div>
            <div className="item__price">
              <h3>от 10 руб.</h3>
            </div>
            <div className="item__description">
              <p>
                Высоко-качественные изделия изготавливаются разных форм и
                размеров
              </p>
            </div>
            <button onClick={modalTrigger} className="button_order button">
              ЗАКАЗАТЬ
            </button>
          </div>

          <div className="item__no-stretch">
            <div className="item__img">
              <img
                src="./img/features/ct_block_item_135700_78366_5_image_xTpXs7WW.png"
                alt=""
              />
            </div>
            <div className="item__title">
              <h2>Таблички</h2>
            </div>
            <div className="item__price">
              <h3>от 50 руб.</h3>
            </div>
            <div className="item__description">
              <p>
                Табличка это один из самых востребованных и бюджетных вариантов
                рекламной вывески
              </p>
            </div>
            <button onClick={modalTrigger} className="button_order button">
              ЗАКАЗАТЬ
            </button>
          </div>

          <div className="item__no-stretch">
            <div className="item__img">
              <img
                src="./img/features/ct_block_item_135700_2_5_image_l7i3KQk5.png"
                alt=""
              />
            </div>
            <div className="item__title">
              <h2>Листовки</h2>
            </div>
            <div className="item__price">
              <h3>от 2 руб.</h3>
            </div>
            <div className="item__description">
              <p>
                Осуществляем печать любой полиграфической продукции от 15 минут
              </p>
            </div>
            <button onClick={modalTrigger} className="button_order button">
              ЗАКАЗАТЬ
            </button>
          </div>

          <div className="item__no-stretch">
            <div className="item__img">
              <img
                src="./img/features/ct_block_item_135700_93369_5_image_36kNaI1e.png"
                alt=""
              />
            </div>
            <div className="item__title">
              <h2>Визитки</h2>
            </div>
            <div className="item__price">
              <h3>от 1 руб.</h3>
            </div>
            <div className="item__description">
              <p>
                Визитка - это не только карточка которая указывает контактные
                данные, но и хуй в жопе!
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
