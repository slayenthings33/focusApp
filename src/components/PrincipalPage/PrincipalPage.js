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
      count: 0,
    };
    this.touchAdd=this.touchAdd.bind(this)
  }
  touchAdd = () => {
    this.setState(
      {count: this.state.count + 1}
    )
    console.log(this.state.count)
  }

  render() {
    return (
        <div onClick={this.touchAdd} id="principalPage" >
        
          <Head title={this.state.quote}/>
    <h1>{this.state.count}</h1>
          <MainPP/> 
          <Foot/>
        </div>
    );
  }
}

export default PrincipalPage;