import React, { Component } from 'react';
import './WelcomePage.css';
import MainWP from './MainWP/MainWP';
import Head from '../Head/Head';
import Foot from '../Foot/Foot';
import {Link} from 'react-router-dom'

class WelcomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"Welcome Page",
      logo:"/img/LogoBlack.png",
      startBtn: <Link to='/createAcc'>Get Started</Link>
    };
  }

  render() {
    
    return (
      <div>
        <Head title={this.state.title} logo={this.state.logo}/>
        <MainWP />
        <Foot button={this.state.startBtn}/>
      </div>
    );
  }
}

export default WelcomePage;