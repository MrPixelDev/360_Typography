import { React, useState, useEffect } from "react";
import { ModalOrder } from "./Modals";
import configData from "../config/config.json";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="/index.html">
            <img src="./img/ico/360.png" alt="" className="logo" />
          </a>
          <p className="logo_title">Рекламная компания</p>
        </div>
        <div className="header__address address">
          <div className="header__icon icon">
            <a href="#mapAddress">
              <img src="./img/ico/pin.png" alt="" className="ico" />
            </a>
          </div>
          <div className="header__data">
            <div className="header__title address__title">Адрес:</div>
            <div className="header__text address__text">
              ул. Промышленная, 9
            </div>
          </div>
        </div>
        <div className="header__contacts contacts">
          <div className="header__icon icon">
            <a href="#phone">
              <img src="./img/ico/phone-call.png" alt="" className="ico" />
            </a>
          </div>
          <div className="header__data">
            <div className="header__title contacts__title">Телефон:</div>
            <div className="header__text contacts__text">+7-913-777-1323</div>
          </div>
          <a href="#">
            <button
              onClick={() => {
                window.open(`tel: ${configData.phone}`);
              }}
              className="button--form__recall button"
            >
              Перезвоните
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Menu = () => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const modalTrigger = (event) => {
    console.log(event.target);
    modalDisplay ? setModalDisplay(false) : setModalDisplay(true);
  };

  useEffect(() => {
    let modalElement = document.getElementById("modalorder");
    console.log(getComputedStyle(modalElement).display);
    getComputedStyle(modalElement).display === "block"
      ? (modalElement.style.display = "none")
      : (modalElement.style.display = "block");
  }, [modalDisplay]);

  return (
    <>
      <ModalOrder trigger={modalTrigger} />
      <div className="menu">
        <div className="menu__nav">
          <div className="menu__burger">
            <span></span>
          </div>
          <nav className="nav">
            <ul className="nav__ul">
              <li className="nav__li">
                <button className="modalBtn dropdown-btn">Услуги</button>
                <div className="dropdown-container">
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Расклейка объявлений</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Монтажные работы</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Дизайн</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Листовки по почтовым ящикам</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Раздачи листовок или промо-акции</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Реклама на асфальте</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Листовки поквартирно</a>
                  </div>
                </div>
              </li>
              <li className="nav__li">
                <button className="modalBtn dropdown-btn">
                  Печатная продукция
                </button>
                <div className="dropdown-container">
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Листовки</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Наклейки</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Таблички</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Баннера</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Пазлы</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Печать на холсте</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Знаки пожарной безопасности</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Фотообои</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Печать на ленте</a>
                  </div>
                </div>
              </li>
              <li className="nav__li">
                <button className="modalBtn dropdown-btn">
                  Световые решения
                </button>
                <div className="dropdown-container">
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Лайтбоксы</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Объемные буквы</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Неоновые вывески</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Тонкие световые панели</a>
                  </div>
                </div>
              </li>
              <li className="nav__li">
                <button className="modalBtn dropdown-btn">
                  Другие рекламные изделия
                </button>
                <div className="dropdown-container">
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Штендеры</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Трафареты</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Информационные стенды</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">POS материалы</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Лазерная резка</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Изготовление печатей</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Изготовление бейджей</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Инстаметка, инставизитка</a>
                  </div>
                  <div
                    onClick={modalTrigger}
                    className="modalBtn dropdown__item"
                  >
                    <a href="#">Мобильные стенды</a>
                  </div>
                </div>
              </li>
              <li className="nav__li">
                <a href="#aboutP">О компании</a>
              </li>
              <li className="nav__li">
                <a href="#footerContacts">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export const HeaderBanner = () => {
  return (
    <div className="header__banner banner">
      <div className="transparent_layer--30 transparent_layer">
        <div className="banner__container container">
          <div className="banner__text--title">
            <h2>ИЗГОТОВЛЕНИЕ НАРУЖНОЙ РЕКЛАМЫ</h2>
          </div>
          <div className="banner__text--content">
            <h3>
              Вывески, объемные буквы, лайтбоксы, тонкие световые панели,
              листовки, визитки и многое другое
            </h3>
          </div>
          <form id="recallform" name="recall" className="form__recall">
            <div className="form__bg">
              <div className="form__row">
                <div className="form__input">
                  <input name="name" type="text" placeholder="* Имя:" />
                </div>
                <div className="form__input">
                  <input name="email" type="email" placeholder="* Почта:" />
                </div>
                <div className="form__input">
                  <input name="tel" type="tel" placeholder="* Телефон:" />
                </div>
                <button
                  onClick={() => {
                    window.open(`tel: ${configData.phone}`);
                  }}
                  name="callme"
                  className="button--form__recall button"
                >
                  Перезвоните
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
