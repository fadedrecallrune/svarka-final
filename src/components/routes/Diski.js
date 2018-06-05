import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Routes.css";

import diski from "../../assets/images/diskism.jpeg";

class Diski extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="route-container">
        <img className="route-image" src={diski} alt="img" />
        <Link className="backbutton" to="/">
          <i
            style={{ marginRight: "3px", marginTop: "1px" }}
            class="fas fa-angle-left"
          />Назад
        </Link>

        <div className="route-info">
          <h1 className="route-name">Реставрация дисков</h1>
          <p className="route-text">
          зварювання дисків легкосплавних
           (титанових) це складний процес, який потребує особливих навиків.
          </p>
          <p className="route-text">
          
          Легкосплавний диск, а тим більше кований, складається з алюмінію з
           різними присадками, що додають диску жорсткість.  Алюміній має 
           властивості миттєво окислюватися в повітряному середовищі і покриватися 
           на поверхні тонкою плівкою. Внаслідок цього, 
          звичайна зварка безсила перед цим металом, потрібний захист від оксиду – аргон.
          </p>
          <p className="route-text">
          Якщо деформація не дуже серйозна, то диск рихтується післь 
          чого заварюється та зачищається, і в кінцевому получається практично
           ідеальний диск.
           Якщо відсутня частина диска то ми її наварюємо, зачищаємо та підмалювуєм.
</p>          
        </div>
      </div>
    );
  }
}

export default Diski;
