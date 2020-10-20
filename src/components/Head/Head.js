import React, { Component } from 'react';
import './Head.css';

class Head extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:this.props.title,
      text:this.props.text,
      backBtn: this.props.backBtn,
      hamburgerMenu: this.props.hamburgerMenu,
    };
  }

  render() {
    return (
        <div id="headContainer">
          <div id="ppHeader">
            <img src={this.state.hamburgerMenu} alt="" id="hamburgerMenu"/>
            <h1 id="slideTitle" className="mainFont">{this.state.title}</h1>
          </div>
          <p id="activitiesText" className="mainFont">{this.state.text}</p>
        </div>
    );
  }
}

export default Head;