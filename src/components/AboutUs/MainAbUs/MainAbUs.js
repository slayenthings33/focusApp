import React, { Component } from 'react';
import './MainAbUs.css';
import Button from '../../Button/Button'
class MainAbUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brealaxText: "BREALAX text",
      pomodoroText: "With this method you will work for 25 minutes followed by a short 5 minute break. Every 2 hours of work you will get a longer 15 minute break. (Lunch is automatically placed in the middle of your workday)",
      brealaxText: "This method is based on a Draugiem Group study which concluded that we are most productive when working for 52 minutes, followed by a 17 minute break. (Lunch is automatically placed in the middle of your workday)",
      customizeText: "Not into the previous methods? Sometimes we know what schedule works best for us. With the customize schedule, you can choose the quantity and duration of your breaks. (You choose when to have lunch)",
      nextBtn: this.props.nextBtn,
    };
    this.changeText = this.changeText.bind(this);
  }
  changeText = (data) => {
    let textSection = document.getElementById("methodSelectTxt")
    if (data == "pomodoro") {
      textSection.innerText = `${this.state.pomodoroText}`
    } else if (data == "brealax") {
      textSection.innerText = `${this.state.brealaxText}`
    } else if (data == "customize") {
      textSection.innerText = `${this.state.customizeText}`
    }
  }



  render() {
    return (
      <div id="mainAbUsPage">
        <div id="methodBtnOptions">
          <div class="methodOptionCollumn">
            <img src="img/pomodoro.png" id= "pomodoroImg" alt="" className="methodBtns" onClick={() => this.changeText("pomodoro")} />
            <span>Pomodoro</span>
          </div>
          <div class="methodOptionCollumn">
            <img src="img/miniLogoBlack.svg" alt="" className="methodBtns" id="brealaxImg"  onClick={() => this.changeText("brealax")} />
            <span id="brealaxMethodTxt">BREALAX</span>
          </div>
          <div class="methodOptionCollumn">
            <img src="img/adjust.png" alt="" className="methodBtns" id="customizeImg" onClick={() => this.changeText("customize")} />
            <span>Customize</span>
          </div>
        </div>
        <div id="methodSelectTxt">
          <img src="/img/logoBlack.svg" alt="" id="abUsBackgroundLogo"/>
        </div>
        <div id="abUsNextBtn">
          <Button nextBtn={this.state.nextBtn} />
        </div>
      </div>
    );
  }
}

export default MainAbUs;