import React from "react";
import "./Footer.css";

import mail from "../../assets/em.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <iframe
        className="map"
        title="map"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyACaHaFmTNfvMA7eLAYBrLm1SOJt0FtVfA
    &zoom=13&language=ru&q=Радищева 6"
        allowfullscreen
      />
      <div className="contacts">
        <h1 className="contacts-name">Контакти</h1>
        <hr className="contacts-hr" />

        <div className="icons">
          <h3>
            <i
              style={{
                fontSize: "26px",
                position: "relative",
                left: "-11px",
                top: "8px"
              }}
              class="material-icons"
            >
              phone
            </i>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="tel:0667548222"
            >
              {" "}
              (066) 754 8 222
            </a>
          </h3>
        </div>

        <div className="icons">
          <h3>
            <i
              style={{
                fontSize: "26px",
                position: "relative",
                left: "-11px",
                top: "6px"
              }}
              class="material-icons"
            >
              mail
            </i>{" "}
            xistik@ukr.net
          </h3>
        </div>

        <div className="icons">
          <h3>
            <i
              style={{
                fontSize: "26px",
                position: "relative",
                left: "-11px",
                top: "5px"
              }}
              class="material-icons"
            >
              location_on
            </i>{" "}
            перевулок Радищева 6
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
