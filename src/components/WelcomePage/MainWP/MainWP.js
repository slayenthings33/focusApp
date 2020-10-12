import React, { Component } from 'react';
import './MainWP.css';

class MainWP extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo: "/img/LogoBlack.jpg",
      text:"A productivity application designed to improve the remote working experience.",
    };
  }



  render() {
    return (
      <div id="welcomeContainer">
        <h2>{this.state.title}</h2>
        <img id="logo" src={this.state.logo} alt="Logo"/>
        <h4 id="welcomeText" class="mainFont"> {this.state.text}</h4>
      </div>
    );
  }
}

export default MainWP;