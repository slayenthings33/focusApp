import React, { Component } from 'react';
import './AboutUs.css';
import MainAbUs from './MainAbUs/MainAbUs';
import Head from '../Head/Head';

class DescriptionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      nextBtn: "/AppBehavior"
    };
  }


  render() {
    return (
      <div id="aboutUsPage">
        <Head title="Select Method"/>
        <MainAbUs nextBtn={this.state.nextBtn}/>
      </div>
    );
  }
}

export default DescriptionPage;