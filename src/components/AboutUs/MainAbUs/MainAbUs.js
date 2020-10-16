import React, { Component } from 'react';
import './MainAbUs.css';
import Button from '../../Button/Button'
class MainAbUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      brealaxText: "BREALAX text",
      pomodoroText: "Pomodoro text",
      customizeText: "Customize text",
      nextBtn: this.props.nextBtn,
      pomodoroText: "Pomodoro Text",
      brealaxText: "Brealax Text",
      customizeText: "Customize Text",
    };
    this.changeText = this.changeText.bind(this);
  }
      changeText = (data) => {
        let textSection = document.getElementById("methodSelectTxt")
        if(data == "pomodoro"){
         textSection.innerText = `${this.state.pomodoroText}` 
        } else if(data== "brealax") {
          textSection.innerText = `${this.state.brealaxText}`
        } else if(data=="customize") {
          textSection.innerText=`${this.state.customizeText}`
        }
      }



  render() {
    return (
      <div id="mainAbUsPage">
        <div id="methodBtnOptions">
          <div class="methodOptionCollumn">
            <img src="img/miniLogoBlack.svg" id="brealaxImg" alt="" className="methodBtns" onClick={()=>this.changeText("brealax")}/>
            <span>BREALAX</span>
          </div>
          <div class="methodOptionCollumn">
            <img src="img/pomodoro.png" alt="" className="methodBtns" id="pomodoroImg" onClick={()=>this.changeText("pomodoro")}/>
            <span>Pomodoro</span>
          </div>
          <div class="methodOptionCollumn">
            <img src="img/adjust.png" alt="" className="methodBtns" id="customizeImg" onClick={()=>this.changeText("customize")}/>
            <span>Customize</span>
          </div>
        </div>
        <div id="methodSelectTxt">
          
        </div>
        <div id="abUsNextBtn">
          <Button nextBtn={this.state.nextBtn}/>
        </div>
      </div>
    );
  }
}

export default MainAbUs;