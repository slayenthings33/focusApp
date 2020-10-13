import React, { Component } from 'react';
import './MainCA.css';
import "firebase/auth";
import "firebase/firestore";
// import * as firebaseui from "firebaseui";

class MainCA extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  
  
  render() {
    // let loginBtn = document.getElementById("caBtn");
    // console.log(loginBtn);
    // loginBtn.addEventListener("click", ()=> {
    //   ui.start("#firebaseui-auth-container", uiConfig);
    // });

    return (
      <div className="formContainer">
          <form id="caForm" onSubmit={this.mySubmitHandler }>
          <p className="pageText">Email:</p>
          <input type='text' name='email' className="caInput"/><br/><br/>
          <p className="pageText">Password:</p>
          <input type='text' name='password' className="caInput"/> <br/>
          <input id="caBtn" type="submit" value="Submit"/>
        </form>
        <div id="btnContainer">
          <img src="img/facebookIcon.png" alt="login with facebook" classNameName="caIcons"/>
          <img src="/img/googleIcon.png" alt="login with google" classNameName="caIcons"/>
        </div>
      </div>
    );
  }
}

export default MainCA;