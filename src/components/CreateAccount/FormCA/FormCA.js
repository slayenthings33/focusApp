import React, { Component } from 'react';
import './FormCA.css';

class FormCA extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password: "",
      errorMessage: "",
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
  }

  myChangeHandler = (event) => {

    let email = event.target.email;
    let password = event.target.password;
    let val = event.target.value;
    let err = '';
    if (email === "") {
      if (val !=="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
       

      } else {
        this.setState({age: event.target.value});
      }
    }else if (nam === "name") {
      this.setState({username: event.target.value});
    } 
    
    this.setState({errorMessage: err});
  }


  render() {
    return (
      <div>
      <form onSubmit={this.mySubmitHandler }>
        <p>Enter your Email:</p>
        <input type='text' name='email' onChange={this.myChangeHandler}/>
        <p>Choose you Password:</p>
        <input type='text' name='password' onChange={this.myChangeHandler}/>
        <input type="submit" value="send"/>
        {this.state.errorMessage}
      </form>
      </div>
    );
  }
}

export default FormCA;