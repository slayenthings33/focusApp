import React, { Component } from 'react';
import './MainWP.css';

class MainWP extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo: this.props.logo,
    };
  }



  render() {
    return (
      <div>
        <img src={this.state.logo} alt="Logo"/>
        <p>text={this.props.text}</p>
      </div>
    );
  }
}

export default MainWP;