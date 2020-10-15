import React, { Component } from 'react';
import './MainAct.css';
import Button from '../../Button/Button';
import {UserConsumer} from '../../userContext'

class MainAct extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: true,
      unselected: false,
      nextBtn: this.props.nextBtn,
    };
  }
  toggleInput = () => {
    if(this.state.selected){
      console.log()
      return this.state.unselected
    } else {
      return this.state.unselected
    }
  }

  render() {
    return (
      <div >
          <form className="formActContainer">
            <div className="rowContainer">
              <label className="labelContainer">
              <img className="formImage" src="/img/yoga.png" alt=""/>
              <span>Yoga</span>
              <input className="checkboxInput" name="yoga"
                type="checkbox"
                checked={this.state.unselected}
                onChange={this.toggleInput} />
            </label>
              <label className="labelContainer">
              <img className="formImage" src="/img/meditate.png" alt=""/>
              <span id="meditation">Meditation</span>
              <input name="meditation" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput}/>
            </label>
            </div>
            <div className="rowContainer">
            <label className="labelContainer">
              <img src="/img/exercise.png" alt="" className="formImage"/>
              <span>Exercise</span>
              <input name="exercise" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput}/>
            </label>
            <label className="labelContainer">
              <img src="/img/podcast.png" alt="" className="formImage"/>
              <span>Podcast</span>
              <input name="podcast" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput} />
            </label>
            </div>
            <div className="rowContainer">
            <label className="labelContainer">
              <img src="/img/nap.png" alt="" className="formImage"/>
              <span>Nap</span>
              <input name="nap" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput} />
            </label>
            <label className="labelContainer">
              <img src="/img/smart.png" alt="" className="formImage"/>
              <span id="educationalVideo">Educational Video</span>
              <input className="checkboxInput" name="smartVids" type="checkbox"
                checked={this.state.unselected}
                onChange={this.toggleInput} />
            </label>
            </div>
            <div className="rowContainer">
            <label className="labelContainer">
              <img src="/img/walk.png" alt="" className="formImage"/>
              <span>Walk</span>
              <input name="walk" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput} />
            </label>
          <label className="labelContainer">
              <img src="/img/news.png" alt="" className="formImage"/>
              <span>News</span>
              <input className="checkboxInput" name="news" type="checkbox" checked={this.state.unselected}
                onChange={this.toggleInput} />
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