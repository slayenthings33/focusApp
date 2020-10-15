import React, { Component } from 'react';
import './CreateAccount.css';
import Head from '../Head/Head'
import MainCA from './MainCA/MainCA'
// import MainCA from './MainCA/MainCA'
// import Button from '../Button/Button'
class CreateAccount extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"Create Account",
      nextBtn:"/AboutYou"
    };
  }

  render() {
    return (
      <div>
        <main id="createAccountPage">
        <Head title={this.state.title}/>
        <MainCA nextBtn={this.state.nextBtn}/>
        </main>
      </div>
    );
  }
}

export default CreateAccount;