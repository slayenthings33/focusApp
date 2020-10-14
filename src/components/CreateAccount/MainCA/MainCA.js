import React, {Component} from 'react';
import './MainCA.css';
// import {useFirebaseApp} from 'reactfire'
import "firebase/firestore";
import "firebase/firebase-auth"
import firebase from "firebase/app"




class MainCA extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      email:"",
      password: "",
    };
    this.register=this.register.bind(this)
    this.changePass=this.changePass.bind(this)
    this.changeEmail=this.changeEmail.bind(this)
  }
 changePass(e){
   this.setState({password:e.target.value})
   console.log(this.state.password)
 }
 changeEmail(e){
   this.setState({email:e.target.value})
   console.log(this.state.email)
 }

    register() {
      // let firebase = useFirebaseApp();
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email,this.state.password)
      .catch(function(error) {
        //Handle Errors
        alert("error")
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      })
 }
  render() {  
    return (
      <div className="formCaContainer">
          {/* <button onClick={this.register}>Register</button> */}
          <form id="caForm">
          <p className="pageText">Email:</p>
          <input type='text' id="email" name='email' className="caInput" onChange={this.changeEmail}/><br/><br/>
          <p className="pageText">Password:</p>
          <input type='password' name='password' className="caInput" onChange={this.changePass}/> <br/>
          <input id="caBtn" type="submit" value="Submit" onClick={this.register}/>
        </form>
        <div id="btnContainer">
          <img src="img/facebookIcon.png" alt="login with facebook" className="caIcons"/>
          <img src="/img/googleIcon.png" alt="login with google" className="caIcons"/>
        </div>
      </div>
    )
}}

export default MainCA