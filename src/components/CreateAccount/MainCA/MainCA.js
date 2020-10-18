import React, {Component} from 'react';
import './MainCA.css';
// import {useFirebaseApp} from 'reactfire'
import "firebase/firestore";
import "firebase/firebase-auth"
import firebase from "firebase/app"
import Button from "../../Button/Button"




class MainCA extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      email:'',
      password:'',
      nextBtn: this.props.nextBtn,
      googleIcon: "/img/googleIcon.png",
      facebookIcon: "img/facebookIcon.png",
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
      const db=firebase.firestore();
      const newUser={email:this.state.email,
        password:this.state.password
        }
      const addUser=db.collection("users").add(newUser);
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
      <div id="formCaContainer">
        <form id="caForm">
          <p className="pageText">Email:</p>
          <input type='text' id="email" name='email' className="caInput" onChange={this.changeEmail}/><br/><br/>
          <div id="passwordContainer">
            <p className="pageText">Password:</p>
            <input type='password' name='password' className="caInput" onChange={this.changePass}/> <br/>
          </div>
        <div class="haveAccountContainer">
          <span id="haveAccount?">Already have an account ? </span><span id="signIn">Sign in</span>
        </div>
        </form>
        <img src={this.state.facebookIcon} alt="login with facebook" className="caIcons"/>
        <img src={this.state.googleIcon} alt="login with google" className="caIcons"/>
        <div id="caNextBtnContainer">
          <Button onClick={this.register}  nextBtn={this.state.nextBtn}/>
        </div>
        
      </div>
    )
}}

export default MainCA