import React from "react";

export const MapContainer = () => {
  return (
    <div id="mapAddress" className="map__address__container container">
      <div className="title_block">
        <div className="title_block--center">
          <h2 className="title_block__h2">Наш адрес</h2>
          <p className="title_block__description">
            Новосибирск, ул. Королева 40 к.5, 2 этаж, оф.18
          </p>
        </div>
        <div className="map">
          <iframe
            title="mapAddress"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d807.9845276857069!2d82.9628864183913!3d55.055035977314446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe432c9a1e3ab%3A0xcce364811069e476!2sNOVOSIBIRSK%20MARKETING%20SERVICE!5e0!3m2!1sru!2sus!4v1644325634254!5m2!1sru!2sus"
            width="85%"
            height="100%"
            style={{ border: 2 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
