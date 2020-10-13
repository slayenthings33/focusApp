import React, { Component } from 'react';
import './WelcomePage.css';
import MainWP from './MainWP/MainWP';
import Head from '../Head/Head';
import Foot from '../Foot/Foot';
// import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

class WelcomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"Welcome to",
      logo:"/img/LogoBlack.png",
      link: this.props.link,
    
    };
  }

render() {    
  return (
      <div class="page">
        <Head title={this.state.title}/>
        <MainWP/>
        <Foot link={this.state.link}/>
      </div>
    );
  }
}

export default WelcomePage;