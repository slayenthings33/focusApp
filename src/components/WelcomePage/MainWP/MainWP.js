import React, { Component } from 'react';
import './MainWP.css';

class MainWP extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo: "/img/LogoBlack.jpg",
      text:"Welcome to UpBreak, a personalized productivity application for remote workers.",
    };
  }



  render() {
    return (
      <div>
        <img id="logo" src={this.state.logo} alt="Logo"/>
        <p> {this.state.text}</p>
      </div>
    );
  }
}

export default MainWP;