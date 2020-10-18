import React, { Component } from 'react';
import './PrincipalPage.css';
import Head from '../Head/Head';
import MainPP from './MainPP/MainPP';
// import AlertModal from './AlertModal/AlertModal';



class PrincipalPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: "This is a very motivating quote",
      count: 0,
      nextBtn: "/GraphPage",
    };
    this.touchAdd=this.touchAdd.bind(this)
  }
  touchAdd = () => {
      this.setState(
        {count: this.state.count + 1},
      )
  }

  render() {
    return (
        <div id="principalPage" onClick={this.touchAdd} id="principalPage" >
          <Head title={this.state.quote}/>
          <MainPP nextBtn={this.state.nextBtn}/> 
        </div>
    );
  }
}

export default PrincipalPage;