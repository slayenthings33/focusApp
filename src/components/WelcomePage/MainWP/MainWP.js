import React, { Component } from 'react';
import './MainWP.css';
import Button from "../../Button/Button";

class MainWP extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo: "/img/logoBlack.svg",
      text:"A productivity application designed to help you relax and disconnect during breaks.",
      nextBtn: this.props.nextBtn,
    };
  }



  render() {
    return (
      <div id="welcomeContainer">
        <h2>{this.state.title}</h2>
        <img id="logo" src={this.state.logo} alt="Logo"/>
        <h4 id="welcomeText" className="mainFont"> {this.state.text}</h4>
        <Button nextBtn={this.state.nextBtn}/>
      </div>
    );
  }
}

export default MainWP;