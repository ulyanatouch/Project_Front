import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409223185673!2d13.372464412678411!3d52.50793287194149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1702812053730!5m2!1sru!2sde"
      width="600"
      height="350"
      style={{ width: "100%", border: "0" }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export { GoogleMap };
