import React, { Component } from 'react';
import './Activities.css';
import Head from '../Head/Head'
import Main from '../Main/Main'
import Foot from '../Foot/Foot'

class Activities extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }



  render() {
    return (
      <div>
        <Head title={this.props.title}/>
        <Main/>
        <Foot/>
      </div>
    );
  }
}

export default Activities;