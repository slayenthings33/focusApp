import React, { Component } from 'react';
import './AboutUs.css';
import MainAbUs from './MainAbUs/MainAbUs'
import Foot from '../Foot/Foot'
import Head from '../Head/Head'

class DescriptionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }


  render() {
    return (
      <div class="page">
        <Head title="About Us"/>
        <MainAbUs/>
        <Foot/>
      </div>
    );
  }
}

export default DescriptionPage;