import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__smm">
          <span>
            <a href="https://vk.com" className="fa__sm fa fa-vk">
              {" "}
            </a>
            <a href="https://instagram.com" className="fa__sm fa fa-instagram">
              {" "}
            </a>
            <a href="https://youtube.com" className="fa__sm fa fa-youtube">
              {" "}
            </a>
            <a href="https://whatsapp.com" className="fa__sm fa fa-whatsapp">
              {" "}
            </a>
            <a href="https://telegram.org" className="fa__sm fa fa-telegram">
              {" "}
            </a>
          </span>
        </div>
        <div id="footerContacts" className="footer__flexbox item_row">
          <div className="item_row__flexbox">
            <div className="item__no-stretch">
              <div className="item__symbol">
                <p id="phone" className="fa__footer fa fa-phone"></p>
              </div>
              <div className="item__title">
                <h2>Телефон</h2>
              </div>
              <div className="item__description--footer">
                <p>+7-383-375-43-39</p>
                <p>+7-383-375-45-39</p>
                <p>+7-923-775-45-39</p>
                <p>+7-953-886-81-54</p>
              </div>
            </div>
            <div className="item__no-stretch">
              <div className="item__symbol">
                <p className="fa__footer fa fa-location-arrow"></p>
              </div>
              <div className="item__title">
                <h2>Адрес</h2>
              </div>
              <div className="item__description--footer">
                <p>Офис - Новосибирск, ул. Королева 40 к.5, 2 этаж, оф.18</p>
              </div>
            </div>
            <div className="item__no-stretch">
              <div className="item__symbol">
                <p className="fa__footer fa fa-mail-reply-all"></p>
              </div>
              <div className="item__title">
                <h2>E-mail</h2>
              </div>
              <div className="item__description--footer">
                <p>375-45-39@list.ru</p>
                <p>msnovosib@mail.ru</p>
              </div>
            </div>
            <div className="item__no-stretch">
              <div className="item__symbol">
                <p className="fa__footer fa fa-clock-o"></p>
              </div>
              <div className="item__title">
                <h2>Режим работы</h2>
              </div>
              <div className="item__description--footer">
                <p>Пн - Пт с 9:00 до 18:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p>360 © 2022 | Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};
