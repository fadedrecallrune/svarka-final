import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import './Main.css'
import Header from '../header/Header'
import Intro from '../main/Intro'

import argon from "../../assets/images/argon.jpg";
import circus from "../../assets/images/circus.jpg";
import avtobus from "../../assets/images/avtobus.jpeg";
import diski from "../../assets/images/diskism.jpeg";

import circus2 from "../../assets/images/4.jpg";


import Footer from '../footer/Footer'

const Main = () => (
  <div className='main'>

    <Header />

    <Intro />  
    
    <div className='main-link'>
        <Link onClick={this.handleClick} style={{textDecoration:'none'}} to="/">
          <a  className= "btn2" >
            <span>послуги</span>
          </a>
        </Link>
        <Link onClick={this.handleClick} style={{textDecoration:'none'}} to="/price">
          <a  className='btn2'>
            <span>ціни</span>
          </a>
        </Link>

    
    </div>
    <div className="main-container">
      
        <div className="route-link firstcard">
       <Link to='/argon'> <div class="hovereffect">
          <div style={{ textDecoration: "none" }} to="/argon">
            <img className="rt-img" src={argon} alt="" />
            <div class="overlay">
              <h2 style={{ marginTop: "50px" }}>Аргонна зварка</h2>
            </div>
          </div>
        </div></Link>

        <p className='first-link' style={{ textAlign: "center" }}>аргонне та напівавтоматичне зварювання.</p>
        <Link style={{textDecoration:"none"}} to="/argon">
          <a className='btn '  >
            <span>докладніше</span>
          </a>
        </Link>
      </div>

      <div className="route-link ">
       <Link to='/circus'> <div class="hovereffect">
          <div style={{ textDecoration: "none" }} to="/argon">
            <img className="rt-img" src={circus2} alt="" />
            <div class="overlay">
              <h2 style={{ marginTop: "50px" }}>Циркове та спортивне спорядження </h2>
            </div>
          </div>
        </div></Link>

        <p style={{ textAlign: "center" }}>
          Зварювання металоконструкцій для циркового та спортивного спорядження.
        </p>
        <Link style={{textDecoration:'none'}} to="/circus">
          <a className='btn'>
            <span>докладніше</span>
          </a>
        </Link>
      </div>

      <div style={{ marginTop: "5%" }} className="route-link ">
       <Link to='/bus'> <div class="hovereffect">
          <div style={{ textDecoration: "none" }} to="/argon">
            <img className="rt-img" src={avtobus} alt="" />
            <div class="overlay">
              <h2 style={{ marginTop: "50px" }}>Зварювання автобусів</h2>
            </div>
          </div>
        </div></Link>

        <p style={{ textAlign: "center" }}>Зварювання автобусних каркасів.</p>
        <Link style={{textDecoration:'none'}} to="/bus">
          <a className='btn'>
            <span>докладніше</span>
          </a>
        </Link>
      </div>

      <div style={{ marginTop: "5%" }} className="route-link ">
       <Link to='/diski'> <div class="hovereffect">
          <div style={{ textDecoration: "none" }} to="/argon">
            <img className="rt-img" src={diski} alt="" />
            <div class="overlay">
              <h2 style={{ marginTop: "50px" }}>реставрація дисків</h2>
            </div>
          </div>
        </div></Link>
        
        <p style={{ textAlign: "center" }}>Зварювання легкосплавних дисків.</p>
        <Link style={{textDecoration:'none'}} to="/diski">
          <a className='btn'>
            <span>докладніше</span>
          </a>
        </Link>
      </div>
        </div>
        <Footer />
  </div>
)


export default Main