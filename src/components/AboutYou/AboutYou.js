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
      link: this.props.link,
    };
  }


  render() {
    return (
        <div>
            <Head title={this.state.title} />
            <MainAbY/>
            <Foot link= {this.state.link}/>
        </div>
    );
  }
}

export default AboutYou;