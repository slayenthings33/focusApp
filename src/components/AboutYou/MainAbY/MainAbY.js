import React, { Component } from 'react';
import './MainAbY.css';


class MainAbY extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div class="formContainer">
        <form onSubmit={this.mySubmitHandler }>
          <p>Your name:</p>
          <input type='text' name='name' onChange={this.myChangeHandler}/><br/><br/>
          <input type="submit" value="send"/>
          {this.state.errorMessage?<p>{this.state.errorMessage}</p>:"" }
        </form>
      </div>
    );
  }
}

export default MainAbY;