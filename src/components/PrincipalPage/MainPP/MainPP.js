import React, { Component } from 'react';
import './MainPP.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

class MainPP extends Component {
  constructor(props){
    super(props);
    this.state = {
      // bar: <ProgressBar animated now={45} />,
    };
  }

  render() {
    return (
      <div id="principalContainer">
        <div id="progressBar">
        <ProgressBar animated now={45} />
        </div>
      </div>
    );
  }
}

export default MainPP;