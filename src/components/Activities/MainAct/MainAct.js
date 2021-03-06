import React, { Component } from 'react';
import './MainAct.css';
import Button from '../../Button/Button';
import {UserConsumer} from '../../userContext'

class MainAct extends Component {
  constructor(props){
    super(props);
    this.state = {
     check: false,
      nextBtn: this.props.nextBtn,
      selected: false,
    };
    // this.toggleInput = this.toggleSelect.bind(this);
    this.toggleBorder = this.toggleBorder.bind(this);
  }
  
// toggleBorder(e) {
//   console.log(e);
//   e.target.style.border = "red 4px solid";
// }

toggleBorder = (e) => {
  if(e.target.tagName==="LABEL"){  
    if(e.target.style.border == "4px solid #003575") 
        {
          e.target.style.border = "2px solid #003575"          
        }
  else{ e.target.style.border = "4px solid #003575"}

}

  this.setState(prevState => ({
    check: !prevState.check
  }))
  console.log(this.state.selected)
}

  render() {
    return (
      <div >
        <form id="formActContainer">
          <div className="rowContainer">
            <input id="yogaInput" className="checkboxInput" name="yoga"
              type="checkbox"
              value="checked" 
            />
            <label id="yogaLabelContainer" onClick={this.toggleBorder} className="labelContainer">
              <img className="formImage" src="/img/yoga.png" alt=""/>
              <span>Yoga</span>
            </label>
            <label className="labelContainer" onClick={this.toggleBorder}>
            <input name="meditation" className="checkboxInput" type="checkbox" checked={this.state.unselected} onClick={this.addOne} onChange={this.addOne}/>
            <img className="formImage" src="/img/meditate.png" alt="" onClick={this.toggleBorder}/>
            <span id="meditation">Meditation</span>
          </label>
          </div>
          <div className="rowContainer">
          <label className="labelContainer" onClick={this.toggleBorder}>
            <input name="exercise" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput}/>
            <img src="/img/exercise.png" alt="" className="formImage"/>
            <span>Exercise</span>
          </label>
          <label className="labelContainer" onClick={this.toggleBorder}>
            <input name="podcast" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput} />
            <img src="/img/podcast.png" alt="" className="formImage"/>
            <span>Podcast</span>
          </label>
          </div>
          <div className="rowContainer">
          <label className="labelContainer" onClick={this.toggleBorder}>
            <input name="nap" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput} />
            <img src="/img/nap.png" alt="" className="formImage"/>
            <span>Nap</span>
          </label>
          <label className="labelContainer" onClick={this.toggleBorder}>
            <input className="checkboxInput" name="smartVids" type="checkbox"
              checked={this.state.unselected}
              onChange={this.toggleInput} />
            <img src="/img/smart.png" alt="" className="formImage"/>
            <span id="educationalVideo">Educational Video</span>
          </label>
          </div>
          <div className="rowContainer">
          <label className="labelContainer" onClick={this.toggleBorder}>
            <input name="movie" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput} />
            <img src="/img/movie.png" alt="" className="formImage" id="movieImg"/>
            <span>Movie</span>
          </label>
        <label className="labelContainer" onClick={this.toggleBorder}>
            <input className="checkboxInput" name="news" type="checkbox" checked={this.state.unselected}
              onChange={this.toggleInput} />
            <img src="/img/funny.png" alt="" className="formImage" id="funnyImg"/>
            <span>Funny</span>
          </label>
          </div>
        </form>
      <div id="activitiesBtnContainer">
          <Button nextBtn={this.state.nextBtn}/>
        </div>
      </div>
    );
  }
}

export default MainAct;