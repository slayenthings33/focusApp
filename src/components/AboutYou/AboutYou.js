import React, { Component } from 'react';
import './AboutYou.css';
import Head from '../Head/Head'
import MainAbY from './MainAbY/MainAbY'
import UserContext from '../userContext';


class AboutYou extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"About You",
      nextBtn: "/Activities",
      backBtn: "img/back.png"
    };  
  }

  
  
  render() {
    return (
      <div id="aboutYouPage">
        <Head title={this.state.title} backBtn={this.state.backBtn}/>
        <MainAbY nextBtn= {this.state.nextBtn}/>
      </div>
    );
  }
}

export default AboutYou;