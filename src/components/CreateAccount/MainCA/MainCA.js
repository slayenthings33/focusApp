import React, { Component } from 'react';
import './MainCA.css';
import {useFirebaseApp, useFirestoreCollection} from 'reactfire'
import "firebase/firestore";
// import * as firebaseui from "firebaseui";


// class MainCA extends Component {
//   constructor(props){
//     super(props);
//     this.state = {};
//   }



  
  render() {    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    
    // let loginBtn = document.getElementById("caBtn");
    // console.log(loginBtn);
    // loginBtn.addEventListener("click", ()=> {
    //   ui.start("#firebaseui-auth-container", uiConfig);
    // });
    

    return (
      <div className="formCaContainer">
          <form id="caForm" onSubmit={this.mySubmitHandler }>
          <p className="pageText">Email:</p>
          <input type='text' id="email" name='email' className="caInput"/><br/><br/>
          <p className="pageText">Password:</p>
          <input type='text' name='password' className="caInput"/> <br/>
          <input id="caBtn" type="submit" value="Submit"/>
        </form>
        <div id="btnContainer">
          <img src="img/facebookIcon.png" alt="login with facebook" className="caIcons"/>
          <img src="/img/googleIcon.png" alt="login with google" className="caIcons"/>
        </div>
      </div>
    );
  }
}

export default MainCA;