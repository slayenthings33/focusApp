import React, { Component } from 'react';
import './PrincipalPage.css';
import Head from '../Head/Head'
// import MainPP from '../MainPP/MainPP'
import Foot from '../Foot/Foot'
import MainPP from './MainPP/MainPP'

class PrincipalPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: "This is a very motivating quote",
    };
  }


  render() {
    return (
        <div>
          <Head title={this.state.quote}/>
          <MainPP/>
          <Foot/>
        </div>
    );
  }
}

export default PrincipalPage;