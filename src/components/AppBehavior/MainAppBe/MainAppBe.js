import React, { Component } from 'react';
import './MainAppBe.css';

class MainAppBe extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrow: "/img/continueArrow.png",
    };
  }


  render() {
    return (
      <div className="formContainer">
      <form onSubmit={this.mySubmitHandler }>
        <p className="mainFont">How many hours will you be working today?</p>
        <input className="formInput" type='text' name='name' onChange={this.myChangeHandler}/><br/><br/>
      </form>
    </div>
    );
  }
}

export default MainAppBe;