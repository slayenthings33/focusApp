import React, { Component } from 'react';
import './GraphPage.css';
import Head from '../Head/Head';
import MainGP from './MainGP/MainGP';
import Foot from '../Foot/Foot';

class GraphPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "Lets see how productive you were..."
    };
  }



  render() {
    return (
        <div>
          <Head text={this.state.text}/>
          <MainGP/>
          <Foot/>
        </div>
    );
  }
}

export default GraphPage;