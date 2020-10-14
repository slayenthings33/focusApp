import React, { Component } from 'react';
import './AboutYou.css';
import Head from '../Head/Head'
import MainAbY from './MainAbY/MainAbY'
import Foot from '../Foot/Foot'

class AboutYou extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"About You",
      nextBtn: "/Activities"
    };
  }


  render() {
    return (
        <div className="page">
            <Head title={this.state.title} />
            <MainAbY/>
            <Foot nextBtn= {this.state.nextBtn}/>
        </div>
    );
  }
}

export default AboutYou;