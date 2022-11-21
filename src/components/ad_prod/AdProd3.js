import React from "react";

export const AdProd3 = () => {
  return (
    <div className="ad_prod__container container">
      <div className="title_block">
        <div className="title_block--center">
          <h2 className="title_block__h2">Наши преимущества</h2>
          <p className="title_block__description"></p>
        </div>
      </div>
      <div className="item_row">
        <div className="item_row__flexbox">
          <div className="item__no-stretch">
            <div className="item__symbol">
              <p className="fa__body fa fa-clock-o"></p>
            </div>
            <div className="item__title">
              <h2>Короткие сроки</h2>
            </div>
            <div className="item__description">
              <p>
                Мы уважаем и учитываем в работе интересы и требования наших
                партнеров. Мы ориентируемся на длительное взаимовыгодное
                сотрудничество. Наша цель: чтобы обратившись к нам один раз, мы
                стали для Вас постоянным партнером
              </p>
            </div>
          </div>
          <div className="item__no-stretch">
            <div className="item__symbol">
              <p className="fa__body fa fa-address-card"></p>
            </div>
            <div className="item__title">
              <h2>Клиент для нас - главное!</h2>
            </div>
            <div className="item__description">
              <p>
                Время самый ценный ресурс. И сделать быстрее значит сделать
                дешевле. Срок изготовления рекламой продукции – мы озвучиваем
                сразу при обращении. И стараемся строго его соблюдать. На
                некоторых позициях срок изготовления составляет 15 минут
              </p>
            </div>
          </div>
          <div className="item__no-stretch">
            <div className="item__symbol">
              <p className="fa__body fa fa-american-sign-language-interpreting"></p>
            </div>
            <div className="item__title">
              <h2>Ответственность</h2>
            </div>
            <div className="item__description">
              <p>
                Залог успеха - точность в выполнении взятых на себя
                обязательств. Мы выполняем обязательства – как устные, так и
                письменные. Мы признаем и работаем над своими ошибками. Для нас
                важно наше доброе имя
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
