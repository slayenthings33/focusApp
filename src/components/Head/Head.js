import React, { Component } from 'react';
import './Head.css';

class Head extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
   <div>
     <h1>{this.props.title}</h1>
   </div>
    );
  }
}

export default Head;