import React, { Component } from 'react';
import './WelcomePage.css';
import Head from '../Head/Head';
import MainWP from '../Main/Main';
import Foot from '../Foot/Foot';
import {Link} from 'react-router-dom'

class WelcomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"Welcome Page",
      logo:"/img/pomodoro.png",
      text:"Welcome to UpBreak, a personalized productivity application for remote workers.",
      startBtn: <Link to='/createAcc'>Get Started</Link>
    };
  }

  render() {
    
    return (
      <div>
        <Head title={this.state.title}/>
        <MainWP text={this.state.text} logo={this.state.logo}/>
        <Foot button={this.state.startBtn}/>
      </div>
    );
  }
}

export default WelcomePage;