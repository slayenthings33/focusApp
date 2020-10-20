import React, { Component } from 'react';
import './AppBehavior.css';
import Head from '../Head/Head'
import MainAppBe from "./MainAppBe/MainAppBe"

class AppBehavior extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      nextBtn: "/PrincipalPage",
    };
  }

  render() {
    return (
      <div id="appBehaviorPage">
        <Head title={this.state.title} />
        <MainAppBe nextBtn={this.state.nextBtn} />
      </div>
    );
  }
}

export default AppBehavior;