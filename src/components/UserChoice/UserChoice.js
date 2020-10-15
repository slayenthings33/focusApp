import React, { Component } from 'react';
import Head from '../Head/Head';
import MainUC from './MainUC/MainUC';
// import MainUC from './MainUC/MainUC';
import './UserChoice.css';

class UserChoice extends Component {
  constructor(props){
    super(props);
    this.state = {
      nextBtn:"/AboutUs",
    };
  }


  render() {
    return (
        <div id="userChoicePage">
          <Head title="Are you likely to enjoy this content?"/>
          <MainUC nextBtn={this.state.nextBtn}/>
        </div>
    );
  }
}

export default UserChoice;