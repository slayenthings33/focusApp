import React, { Component } from 'react';
import './PrincipalPage.css';
import Head from '../Head/Head';
import MainPP from './MainPP/MainPP';

class PrincipalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      nextBtn: "/GraphPage",
      hamburgerMenu: '/img/hamburgerMenu.png',
    };
    this.touchAdd = this.touchAdd.bind(this)
  }
  touchAdd = () => {
    this.setState(
      { count: this.state.count + 1 },
    )
  }

  render() {
    return (
      <div id="principalPage" onClick={this.touchAdd} id="principalPage" >
        <div id="ppHeadContainer">
          <Head hamburgerMenu={this.state.hamburgerMenu} />
        </div>
        <div id="ppMainppContainer">
          <MainPP nextBtn={this.state.nextBtn} />
        </div>
      </div>
    );
  }
}

export default PrincipalPage;