import React, { Component } from 'react';
import './CreateAccount.css';
import Head from '../Head/Head'
import MainCA from './MainCA/MainCA'
import Foot from '../Foot/Foot'
class CreateAccount extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"Create Account",
    };
  }


  render() {
    return (
      <div>
        <Head title={this.state.title}/>
        <MainCA/>
        <Foot/>
      </div>
    );
  }
}

export default CreateAccount;