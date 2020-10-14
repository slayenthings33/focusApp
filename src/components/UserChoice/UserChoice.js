import React, { Component } from 'react';
import Head from '../Head/Head';
import MainUC from './MainUC/MainUC';
import Foot from '../Foot/Foot';
import './UserChoice.css';

class UserChoice extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }


  render() {
    return (
        <div className="page">
          <Head title="Are you likely to enjoy this content?"/>
          <MainUC/>
          <Foot/>
        </div>
    );
  }
}

export default UserChoice;