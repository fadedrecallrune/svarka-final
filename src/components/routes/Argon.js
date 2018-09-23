import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Routes.css";
import "./Route.css";

import '../../App.css'



import argon from "../../assets/images/argon.jpeg";
import Header from "../header/Header";
import Footer from '../footer/Footer'


class Argon extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  

  render() {
  
    return (
      // <div className="route-container">
      //   <img className="route-image" src={argon} alt="img" />
      //   <Link className="backbutton" to="/">
      //     <i
      //       style={{ marginRight: "3px", marginTop: "1px" }}
      //       class="fas fa-angle-left"
      //     />Назад
      //   </Link>

      //   <div className="route-info">
      //     <h1 className="route-name">Аргонна зварка</h1>
      //     <p className="route-text">
      //     Ми займаємось виготовленням декоративних та несучих
      //      металоконструкцій.Ми пропонуємо різноманітні композиції 
      //     з максимальними врахуваннями побажань Клієнта.
      //     </p>
      //     <p className="route-text">
          
      //     Аргонова зварка алюмінію - досить таки складний процес і
      //      вимагає необхідної кваліфікації працівників. Це пов'язано з
      //       хімічними властивостями даного металу, адже при контакті з 
      //       киснем на поверхні металу утворюється оксидна плівка. Для
      //        запобігання окислення процес виробляють в спеціальній інертному 
      //        газовому середовищі. Цей газ - аргон. Якість зварювання 
      //        безпосередньо залежить від якості проведених підготовчих робіт 
      //        і самого нержавіючого дроту.
      //      Оксидна плівка видаляється механічним або хімічним шляхом.
      //     </p>
      //      </div>
      //   </div>
      <div className='nogallery-route-container'>
      <Header />

        <h1 className="route-name">Аргонна зварка</h1>

        <div className='second-route-container'>
        <img className="argon-image" src={argon} alt="img" />
        <div className="route-description">
        <p className="route-text">
           Ми займаємось виготовленням декоративних та несучих
            металоконструкцій.Ми пропонуємо різноманітні композиції 
           з максимальними врахуваннями побажань Клієнта.
           </p>
           <p className="route-text">
        
           Аргонова зварка алюмінію - досить таки складний процес і
            вимагає необхідної кваліфікації працівників. Це пов'язано з
             хімічними властивостями даного металу, адже при контакті з 
             киснем на поверхні металу утворюється оксидна плівка. Для
              запобігання окислення процес виробляють в спеціальній інертному 
              газовому середовищі. Цей газ - аргон. Якість зварювання 
              безпосередньо залежить від якості проведених підготовчих робіт 
              і самого нержавіючого дроту.
            Оксидна плівка видаляється механічним або хімічним шляхом.
          </p>
        </div>
        </div>
        <div style={{marginTop:'100px'}} ></div>
       <Footer />
        
        </div>
    );
  }
}

export default Argon;
