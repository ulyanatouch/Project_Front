import React from "react";
import "./Footer.scss";
import { ContactsCards } from "../../Components/ContactsCards/ContactsCards";
import { GoogleMap } from "../../Components/GoogleMapReact/GoogleMapReact";

const Footer = () => {
  const contactsCardData = [
    { title: "Phone", content: "+49 999 999 99 99" },
    { title: "Social", content: "" },
    {
      title: "Address",
      content: "Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland",
    },
    { title: "Working Hours", content: "24 hours a day" },
  ];
  return (
    <div className="footer">
      <h1 className="footer__title">Contact</h1>
      <div className="footer__cards">
        {contactsCardData.map((item, index) => (
          <ContactsCards contactCardConfig={item} key = {index}/>
        ))}
      </div>

      <GoogleMap />
    </div>
  );
};

export { Footer };
