import React, { Component } from 'react';
import './AboutYou.css';
import Head from '../Head/Head'
import Main from '../Main/Main'
import Foot from '../Foot/Foot'

class AboutYou extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"About You",
      text:"Tell us a bit about yourself",
    };
  }


  render() {
    return (
      <div>
          <Head title={this.state.title}/>
          <Main text={this.state.text}/>
          <Foot/>
      </div>
    );
  }
}

export default AboutYou;