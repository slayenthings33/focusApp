import React, { Component } from 'react';
import './MainPP.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from '../../Button/Button'
import { UserConsumer } from '../../userContext';
import AlertModal from '../AlertModal/AlertModal';

class MainPP extends Component {
  constructor(props){
    super(props);
    this.state = {
      nextBtn:this.props.nextBtn,
      totalHours: 8,
      workPeriodMin: 52,
      // totalMinsOfDay: 8,
      totalSecsOfDay: 8 * 10,
      breakPeriodMin: 17,
      startTime: Date.now(),
      // minsWorked: 0,
      secsWorked: 0,
      progressPercentage: 0,
      showModal: false,
    };
    this.updateMinsWorked = this.updateMinsWorked.bind(this);
    this.timer = this.timer.bind(this);
    this.increment = this.increment.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.checkIfBreak = this.checkIfBreak.bind(this);
    this.progressPercentage = this.progressPercentage.bind(this);
  }

  updateMinsWorked() {
    console.log(this.state.startTime);
    console.log((Date.now() - this.state.startTime));
    let secsWorkedSoFar = (Math.floor((Date.now() - this.state.startTime)/1000)); // 1000 cuz of Date.now returns miliseconds

    // this.setState({minsWorked: Math.floor(this.state.minsWorked + (secondsworked/60))});
    
    this.setState(      
      {
        secsWorked: Math.floor(
          secsWorkedSoFar
        )
      }
    );

  }
  
  increment() {
    console.log('in increment did mount');
    this.updateMinsWorked();
    this.updateProgress();
    this.checkIfBreak();
  }

  checkIfBreak() {
    // console.log((this.state.minsWorked % 52) === 0);
    // if((this.state.minsWorked % 2) === 0) {
    //   console.log('made it');
    //   this.setState({showModal:true})
    //   console.log("El valor es:"+ this.state.showModal)
    // }
    if(this.state.progressPercentage % 10 === 0) {
      this.setState({showModal:true})

    }
  }
  
  timer() {
    // console.log('in timer did mount');
    //setInterval(this.increment, 60000); //60000 = 1min 
    setInterval(this.increment, 1000);
  }
  
  componentDidMount() {
    // console.log('in compoenent did mount');
    window.addEventListener('load', this.timer());
  }

  updateProgress() {
    // console.log('updateProgress');
    console.log(this.state.progressPercentage)
    let percentage = (this.state.secsWorked/this.state.totalSecsOfDay) * 100; 
    this.setState({progressPercentage: percentage});
  }


  progressPercentage() {
    this.updateMinsWorked();
    return (this.state.secsWorked / this.state.totalSecsOfDay) * 100;  
  }
  


  render() {
    // console.log("inside MainPP render")
    return (
      <div>
      <UserConsumer>  
            {() => {
            return(
              <div id="principalContainer">
                <AlertModal showModal={this.state.showModal}/>
                <div id="progressBarContainer">
                  <div id="ppImgContainer">
                    <img src="img/sunrise.png" alt="" className="ppImgs"/>
                    <img src="img/eat.png" alt="" className="ppImgs"/>
                    <img src="img/finish.png" alt="" className="ppImgs"/> 

                  </div>
                  <div id="segmentContainer">
                    <div className="segments"></div>
                    <div className="segments"></div>
                    <div className="segments" id="lunch"></div>
                    <div className="segments"></div>
                    <div className="segments"></div>
                  </div>
                  <ProgressBar id="progressBar" animated now={this.state.progressPercentage} />
                  </div>
                  <div id="ppBtnContainer">
                  <Button nextBtn={this.state.nextBtn}/>
                </div>
              </div>
            )}
          }
          </UserConsumer>
        </div>
    );
  }
}

export default MainPP;