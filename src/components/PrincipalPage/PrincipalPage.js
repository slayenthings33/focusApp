import React, { Component } from 'react';
import './PrincipalPage.css';
import Head from '../Head/Head'
// import MainPP from '../MainPP/MainPP'
import Foot from '../Foot/Foot'

class PrincipalPage extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <Head title={this.props.title}/>
        {/* <MainPP/> */}
        <Foot/>
      </div>
    );
  }
}

export default PrincipalPage;