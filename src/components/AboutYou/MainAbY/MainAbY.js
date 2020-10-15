import React, { Component } from 'react';
import './MainAbY.css';
import Button from '../../Button/Button';
import firebase from "firebase/app";
// import UserContext, { UserConsumer } from '../../userContext';

class MainAbY extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrow: "/img/continueArrow.png",
      nextBtn: this.props.nextBtn,
      name: "",
    };
    // const db = firebase.collection('/users')
    // let users = firebase.firestore().collection("/users")
    // console.log(users)
    // users.doc(id).set({
    //   name: this.state.name,
    // })
  }

  render() {
    return (
      <div className="formAbyContainer">
        {/* <UserConsumer> */}
          <form id="aboutYouForm">
            <p className="pageText">What you would like to be called:</p>
            <input type='text' name='name' value={this.state.name} onChange={this.myChangeHandler}/><br/><br/>
          </form>
          {/* </UserConsumer> */}
          <Button nextBtn={this.state.nextBtn}/>
      </div>
    );
  }
}

// MainAbY.contextType = UserContext

export default MainAbY;