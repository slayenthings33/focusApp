import React, { Component } from 'react';
import './Foot.css';

class Foot extends Component {
  constructor(props){
    super(props);
    this.state = {
      btnFB: <a href="#">Login with Facebook</a>,
      btnG: <a href="#">Login with Google</a>,
    };
  }


  render() {
    return (
      <div id="btnContainer">
        {this.state.btnFB}
        {this.state.btnG}
      </div>
    );
  }
}

export default Foot;