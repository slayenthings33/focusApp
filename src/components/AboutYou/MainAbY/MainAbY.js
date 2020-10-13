import React, { Component } from 'react';
import './MainAbY.css';


class MainAbY extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrow: "/img/continueArrow.png",
    };
  }


  render() {
    return (
      <div className="formContainer">
        <form id="aboutYouForm" onSubmit={this.mySubmitHandler }>
          <p className="pageText">What you would like to be called:</p>
          <input type='text' name='name' onChange={this.myChangeHandler}/><br/><br/>
        </form>
      </div>
    );
  }
}

export default MainAbY;