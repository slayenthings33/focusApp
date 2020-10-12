import React, { Component } from 'react';
import './AboutUs.css';
import MainAbUs from './MainAbUs/MainAbUs'
import Foot from '../Foot/Foot'

class DescriptionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }


  render() {
    return (
      <div>
        <MainAbUs/>
        <Foot/>
      </div>
    );
  }
}

export default DescriptionPage;