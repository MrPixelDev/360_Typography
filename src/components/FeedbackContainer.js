import { React, useState, useEffect } from "react";
import { ModalConfident } from "./Modals";

export const FeedbackContainer = () => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const modalTrigger = (event) => {
    console.log(event.target);
    modalDisplay ? setModalDisplay(false) : setModalDisplay(true);
  };

  useEffect(() => {
    let modalElement = document.getElementById("modalconfident");
    console.log(getComputedStyle(modalElement).display);
    getComputedStyle(modalElement).display === "block"
      ? (modalElement.style.display = "none")
      : (modalElement.style.display = "block");
  }, [modalDisplay]);

  return (
    <div className="feedback__container container">
      <ModalConfident trigger={modalTrigger} />
      <div className="title_block">
        <div className="title_block--center">
          <h2 className="title_block__h2">Остались вопросы?</h2>
          <p className="title_block__description">
            Отправьте заявку и мы перезвоним в течении 30 мин в рабочие часы
          </p>
        </div>
      </div>

      <div className="feedback__form transparent_layer--30">
        <form name="feedback">
          <div className="feedback__grid">
            <div className="grid__name form__input">
              <input name="name" type="text" placeholder="* Имя:" />
            </div>
            <div className="grid__phone form__input">
              <input name="tel" type="text" placeholder="* Телефон:" />
            </div>
            <div className="grid__email form__input">
              <input name="email" type="text" placeholder="* Email:" />
            </div>
            <div className="grid__message form__input">
              <textarea
                className="boxsizingBorder"
                name="message"
                rows="10"
                placeholder="* Сообщение:"
              ></textarea>
            </div>
          </div>
          <button className="button--send button">Отправить</button>
        </form>
        <div className="confident_policy">
          <p>
            Отправляя данную форму, вы соглашаетесь c
            <a onClick={modalTrigger} href="#">
              {" "}
              Политикой конфиденциальности.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
