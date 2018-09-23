import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Route.css";

import '../../App.css'

import avtobus from "../../assets/images/avtobus.jpeg";

import BusGallery from '../gallery/BusGallery'
import Footer from '../footer/Footer'
import Header from '../header/Header'





class Avtobus extends Component {
  componentDidMount = () => {
        window.scrollTo(0, 0);
      };

      render(){
        return (
          <div className='withgallery-route-container' >

            <Header />
           <h1 className="route-name">Зварка Автобусів</h1>
            <div className='second-route-container'>
            <img className="bus-image" src={avtobus} alt="img" />

            
           <div className="route-description">
           <p className="route-text">
           Полуавтоматична зварка широко застосовується при ремонті різних частин і 
           вузлів автомобілів. При цьому особливістю є можливість вживання цієї 
           технології в багатьох суміжних областях, що дозволяє проводити повний 
           спектр робіт з алюмінієм, нержавіючою сталлю, чавуном, титаном і 
           кольоровими металами. 

           Використання аргонової зварки – оптимальний варіант вирішення проблем з механічним
           пошкодженням, оскільки вартість зварки значно нижче вартості заміни пошкодженої
           деталі . Легкосплавний диск, а тим більше кований, складається з алюмінію з 
           різними присадками, що додають диску жорсткість. Алюміній має властивості
           миттєво окислюватися в повітряному середовищі і покриватися на поверхні
           тонкою плівкою. 
           </p>
           </div>
          </div>

            <div className='gallery-container'>
         <BusGallery />
         </div>
         
       <Footer />
          </div>
        )
      }
}

export default Avtobus;
