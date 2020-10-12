import React, { Component } from 'react';
import './Head.css';

class Head extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:this.props.title,
      text:this.props.text
    };
  }

  render() {
    return (
        <div id="headContainer">
          <h1 class="mainFont">{this.state.title}</h1>
          <p id="activitiesText" class="mainFont">{this.state.text}</p>
        </div>
    );
  }
}

export default Head;