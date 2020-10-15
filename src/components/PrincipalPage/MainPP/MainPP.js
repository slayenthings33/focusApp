import React, { Component } from 'react';
import './MainPP.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from '../../Button/Button'

class MainPP extends Component {
  constructor(props){
    super(props);
    this.state = {
      nextBtn:this.props.nextBtn,
    };
  }

  render() {
    return (
      <div id="principalContainer">
        <div id="progressBar">
        <ProgressBar animated now={75} />
        </div>
        <div id="ppBtnContainer">
          <Button nextBtn={this.state.nextBtn}/>
        </div>
      </div>
    );
  }
}

export default MainPP;