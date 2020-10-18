import React, { Component } from 'react';
import './BackButton.css';

class BackButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      backBtn: this.props.backBtn,
      onBackClick: this.props.onClick,
      arrowBack: "/img/back.png",
    };
  }

  render() {
    return (
      <div>
         <Link to={this.state.backBtn} onClick={this.state.onBackClick} id="backBtn"><img src={this.state.arrowBack} alt="back button"/></Link>
      </div>
    );
  }
}

export default BackButton;