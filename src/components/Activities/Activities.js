import React, { Component } from 'react';
import './Activities.css';
import Head from '../Head/Head'
import MainAct from './MainAct/MainAct'
import Foot from '../Foot/Foot'

class Activities extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "How you would like to spend your breaks",
    };
  }



  render() {
    return (
      <div>
        <Head title={this.props.title} text={this.state.text}/>
        <MainAct/>
        <Foot/>
      </div>
    );
  }
}

export default Activities;