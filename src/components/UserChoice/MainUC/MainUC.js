import React, { Component } from 'react';
import './MainUC.css';
import Button from '../../Button/Button';

class MainUC extends Component {
  constructor(props){
    super(props);
    this.state = {
      nextBtn:this.props.nextBtn,
    };
  }


  render() {
    return (
      <div id="contentContainer">
        <div id="content">
        <div id="fakeImg">
          <img id="ucPic" src="/img/yogaVidPic.jpg" alt=""/>
        </div>
        <p id="ucImgTitle">The title is - This</p>
        </div>
        <div id="btnContainer">
          <div id="likeBtnContainer">
            <img className="ucBtns" src="/img/like.png" alt=""/><img className="ucBtns" src="/img/dislike.png" alt=""/>
          </div>
            <Button nextBtn={this.state.nextBtn}/>
        </div>
      </div>
    );
  }
}

export default MainUC;