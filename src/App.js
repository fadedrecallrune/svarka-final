import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import Main from './components/main/Main'
import Price from './components/price/Price'
import Argon from './components/routes/Argon'
import Bus from './components/routes/Bus'
import Circus from './components/routes/Circus'
import Diski from './components/routes/Diski'

class App extends Component {
  render() {
    return (
      <div className="">
      
        <Route exact path='/' component={Main} />
        <Route  path='/price' component={Price} />
        <Route path='/argon' component={Argon} />
        <Route path='/bus' component={Bus} />
        <Route path='/circus' component={Circus} />
        <Route path='/diski' component={Diski} />
        
        
      </div>
    );
  }
}

export default App;
