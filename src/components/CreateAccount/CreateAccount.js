import React, { Component } from 'react';
import './CreateAccount.css';
import Head from '../Head/Head'
import Main from '../Main/Main'
import Foot from '../Foot/Foot'

class CreateAccount extends Component {
  constructor(props){
    super(props);
    this.state = {
        logo: "./img/pomodoro.png",
    };
  }


  render() {
    return (
      <div>
        <Head title={this.props.title}/>
        <Main logo={this.state.logo}/>
        <Foot/>
      </div>
    );
  }
}

export default CreateAccount;