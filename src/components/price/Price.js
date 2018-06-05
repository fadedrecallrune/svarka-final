import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Table from 'rc-table';
import 'rc-table/assets/index.css';

import '../main/Main.css'
import Intro from '../main/Intro'
import Header from '../header/Header'
import Footer from '../footer/Footer';

const { ColumnGroup, Column } = Table;

const data = [
  {name: 'Нержавіюча сталь', address: '1 — 2	', price:'200', key:'1' },
  { name: 'Нержавіюча сталь', address: '2 — 4', price: '300', key:'2' },
  { name: 'Нержавіюча сталь',address: '4 — 8	', price:'400', key:'3' },
];
const data2 = [
  { name: 'Алюміній',address: '1,5 — 3	', price:'300', key:'4' },
  { name: 'Алюміній', address: '3 — 5	', price:'450', key:'5' },
  { name: 'Алюміній', address: '5 — 10	', price:'700', key:'6' },
]
const data3 = [
  {name: 'Сталь', address: '1,5 — 3	', price:'200', key:'7' },
  { name: 'Сталь', address: '3 — 6', price:'300', key:'8' },
  {name: 'Сталь', address: '6 — 10', price:'400', key:'9' }
]

const Price = () => (
  <div className='main-price-container' >

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
        
    <div style={{marginTop:'80px'}} >
    <Table data={data}>
          <Column title="Матеріал" dataIndex="name" 
           key="a" width={200} />
          <Column title="Товщина, мм" dataIndex="address"
           key="a" width={150} />
          <Column title='Ціна грн./м' dataIndex="price"
            key="a" width={150} />
          </Table>
          <Table data={data2} showHeader={false} >
          <Column title="Матеріал" dataIndex="name" 
           key="a" width={200} />
          <Column title="Товщина, мм" dataIndex="address"
            key="a" width={150} />
          <Column title='Ціна грн./м' dataIndex="price"
            key="a" width={150} />
          </Table>
          <Table data={data3} showHeader={false} >
          <Column title="Матеріал" dataIndex="name" 
           key="a" width={200} />
          <Column title="Товщина, мм" dataIndex="address"
           key="a" width={150} />
          <Column title='Ціна грн./м' dataIndex="price"
            key="a" width={150} />
          </Table>
          </div>


          
          <div style={{ marginTop:'30px', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}} className="main-price">
    
        
        <h4  className='price-tag'>Минимальний виїзд зварщика на об'єкт — 1 000 грн.</h4>
        <h4 className='price-tag'>Каркас сходів — 12 000 — 16 000 грн./этаж</h4>
        <h4 className='price-tag'>Ворота — от 1 200 грн./м.п.</h4>
        <h4 className='price-tag'>Огорожа — от 800 грн./м.п.</h4>
        <h4 className='price-tag'>Балкони — от 1 000 грн./м.п.</h4>
        <h4 className='price-tag'>Вартість зварки металоконструкцій — от 8 000 грн. за тонну.</h4>
      </div>
      <Footer />
    </div>
)

export default Price;