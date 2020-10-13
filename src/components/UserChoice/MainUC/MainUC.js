import React, { Component } from 'react';
import './MainUC.css';

class MainUC extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }


  render() {
    return (
      <div id="contentContainer">
        <div id="content">
        <div id="fakeImg">
          <img id="ucImg" src="" alt=""/>
        </div>
        <p id="ucImgTitle">The title is - This</p>
        </div>
        <div id="btnContainer">
          <img className="ucBtns" src="/img/like.png" alt=""/><img className="ucBtns" src="/img/dislike.png" alt=""/>
        </div>
      </div>
    );
  }
}

export default MainUC;