import React, { Component } from 'react';
import './AppBehavior.css';
import Head from '../Head/Head'
import MainAppBe from "./MainAppBe/MainAppBe"
import Foot from '../Foot/Foot'

class AppBehavior extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Method Personalization",
    };
  }

  render() {
    return (
      <body>
        <div class="page">
          <Head title={this.state.title}/>
          <MainAppBe/>
          <Foot/>
        </div>
      </body>
    );
  }
}

export default AppBehavior;