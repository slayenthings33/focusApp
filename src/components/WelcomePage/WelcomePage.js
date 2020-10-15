import React, { Component } from 'react';
import './WelcomePage.css';
import MainWP from './MainWP/MainWP';
import Head from '../Head/Head';
import { UserConsumer } from '../userContext';
// import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

class WelcomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"Welcome to",
      nextBtn:"/CreateAccount"
    };
  }

render() {    
  return (
      <div id="welcomePage">
        <UserConsumer> 
          {email => {
            return <span>Email: {email}</span>
            }} 
        </UserConsumer>
          <Head title={this.state.title}/>
          <MainWP nextBtn={this.state.nextBtn}/>
      </div>
    );
  }
}

export default WelcomePage;