import React, { Component } from 'react';
import './MainAppBe.css';
import Button from '../../Button/Button'

class MainAppBe extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrow: "/img/continueArrow.png",
      nextBtn: this.props.nextBtn,
    };
  }


  render() {
    return (
      <div className="formContainer">
      <form onSubmit={this.mySubmitHandler }>
        <p className="mainFont">How many hours will you be working today?</p>
        <input id="appBehaviorNameInput" className="formInput" type='number' name='name' onChange={this.myChangeHandler}/><br/><br/>
      </form>
      <div id="appBehaviorNextBtnContainer">
        <Button nextBtn={this.state.nextBtn}/>
      </div>
    </div>
    );
  }
}

export default MainAppBe;