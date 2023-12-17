import React from "react";
import "./ContactsCards.scss";
import instagram from "../../assets/images/ic-instagram.svg";
import whatsapp from "../../assets/images/ic-whatsapp.svg";

const ContactsCards = ({ contactCardConfig }) => {
  return (
    <div className="contacts-cards">
      <div className="contacts-cards__title">{contactCardConfig.title}</div>

      {contactCardConfig.content ? (
        <div className="contacts-cards__content">
          {contactCardConfig.content}
        </div>
      ) : (
        <div className="contacts-cards__images">
          <img src={instagram} alt="instagram" />
          <img src={whatsapp} alt="whatsapp" />
        </div>
      )}
    </div>
  );
};

export { ContactsCards };
