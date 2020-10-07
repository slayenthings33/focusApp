import React, { Component } from 'react';
import './CreateAccount.css';
import Head from '../Head/Head';
import Main from '../Main/Main';
import Foot from '../Foot/Foot';
import FormCA from '../FormCA/FormCA';
import {Link} from 'react-router-dom';

class CreateAccount extends Component {
  constructor(props){
    super(props);
    this.state = {

      title:"Create Account",
      btnFB: <a href="#">Login with Facebook</a>,
      btnG: <a href="#">Login with Google</a>,
      form: FormCA
    };
  }


  render() {
    return (
      <div>
        <Head title={this.state.title} />
        <Main form={this.state.form}/>
        <Foot/>
      </div>
    );
  }
}

export default CreateAccount;