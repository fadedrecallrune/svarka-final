import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Route.css";

import circus from "../../assets/images/circus.jpg";
import circus2 from "../../assets/images/4.jpg";

import Footer from '../footer/Footer'
import Header from '../header/Header'
import SportGallery from '../gallery/SportGallery'

class Circus extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className='circus-route-container' >

      <Header />
     <h1 className="route-name">Циркове та Спортивне спорядження</h1>
      <div className='second-route-container'>
      <img className="circus-image" src={circus} alt="img" />

      
     <div className="route-description">
     <p className="route-text">
         Виготовляємо металоконстрокції реквезиту та знарядя для еквілібрування.
           </p>
           <p style={{marginTop:'15px'}} className="route-text">
           Колесо для еквілібрування ("Колесо Сира"), Сходи, П'єдестал-платформа для ручного еквілібрування,
           Палиця для еквілібрування, Ходулі, Спідниця для еквілібрування та багото іншого.

           </p>
           <p style={{marginTop:'10px'}} className="route-text">
           Час виготовлення реквезиту від двох тижнів.
           </p>
     </div>
    </div>

      <div style={{marginTop:'100px'}} className='gallery-container'>
   <SportGallery />
   </div>
   
 <Footer />
    </div>
    );
  }
}

export default Circus;
