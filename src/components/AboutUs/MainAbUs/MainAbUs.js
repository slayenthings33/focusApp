import React, { Component } from 'react';
import './MainAbUs.css';
import Button from '../../Button/Button'
class MainAbUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "Researchers have identified various time-tracking productivity methods to take full advantage of the body´s natural span of focus. This application has been designed to implement the BREALAX method which consists of 52 mimute work segments followed by 17 minutes of break. You can later customize your day via settings but for now... BREALAX",
      nextBtn: this.props.nextBtn,
    };
  }



  render() {
    return (
      <div id="mainAbUsPage">
        <div id="abUsImgContainer">
          
        </div>
        <p>{this.state.text}</p>
        <Button nextBtn={this.state.nextBtn}/>
      </div>
    );
  }
}

export default MainAbUs;