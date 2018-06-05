import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Routes.css";

import circus from "../../assets/images/circus.jpg";

class Circus extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="route-container">
        <img className="route-image" src={circus} alt="img" />
        <Link className="backbutton" to="/">
          <i
            style={{ marginRight: "3px", marginTop: "1px" }}
            class="fas fa-angle-left"
          />Назад
        </Link>

        <div className="route-info">
          <h1 className="route-name">Цирковой реквезит</h1>
          <p className="route-text">
            Виготовляємо металоконстрокції для циркового реквізиту на замовлення.
          </p>
        </div>
        
      </div>
    );
  }
}

export default Circus;
