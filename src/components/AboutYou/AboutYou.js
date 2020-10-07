import React, { Component } from 'react';
import './AboutYou.css';
import Head from '../Head/Head'
import Main from '../Main/Main'
import Foot from '../Foot/Foot'

class AboutYou extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }


  render() {
    return (
      <div>
          <Head title={this.props.title}/>
          <Main text={this.props.text}/>
          <Foot/>
      </div>
    );
  }
}

export default AboutYou;