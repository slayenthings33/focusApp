import React, { Component } from 'react';
import './AppBehavior.css';
import Head from '../Head/Head'
import MainAppBe from "./MainAppBe/MainAppBe"
import Foot from '../Foot/Foot'

class AppBehavior extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "Select your Productivity Method"
    };
  }

  render() {
    return (
      <div>
        <Head title={this.props.title} text={this.state.text}/>
        <MainAppBe/>
        <Foot/>
      </div>
    );
  }
}

export default AppBehavior;