import React, { Component } from 'react';
import './Button.css';
import {Link} from "react-router-dom";

// const paths = ["/", "/CreateAccount","/AboutYou","/Activities","/UserChoice", "/AboutUs","/AppBehavior", "/PrincipalPage", "/GraphPage"];

// function getLocation() {
//   return window.location.href;  
// }

// function currentPath() {
//   let url= getLocation();
//   let parsedUrl = url.split("/");
//   return `/${parsedUrl[3]}`;
// };
// function nextPage() { 
//   let currentUrl = currentPath();
//   // console.log(currentUrl);  
//   let pathIndex = paths.findIndex((e)=>{
//     return e===currentUrl;
//   });
//   // console.log(pathIndex); 
//   let nextPath = paths[pathIndex+1];
//   return nextPath;
// }

class Foot extends Component {
  constructor(props){
    super(props);
    this.state = {
      nextBtn:this.props.nextBtn,
      onClick: this.props.onClick,
      arrow: "/img/continueArrow.png",
    };
  }


  render() {
    // console.log(this.state.link);
    return (
      <div id="footContainer">
       <Link to={this.state.nextBtn} onClick={this.state.onClick} id="nextPageBtn"><img src={this.state.arrow} alt="next button"/></Link>
      </div>
    );
  }
}

export default Foot;