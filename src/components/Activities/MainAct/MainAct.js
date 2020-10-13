import React, { Component } from 'react';
import './MainAct.css';

class MainAct extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: true,
      unselected: false,
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
      <div className="formContainer">
        <form >
          <label className="labelContainer">
            <img className="formImage" src="/img/yoga.png" alt=""/>
            <input className="checkboxInput" name="yoga"
              type="checkbox"
              checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
          <label className="labelContainer">
            <img className="formImage" src="/img/meditate.png" alt=""/>
            <input name="meditation" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput}/>
          </label>
          <br/>
          <label>
            <img src="/img/exercise.png" alt="" classNameName="formImage"/>
            <input name="exercise" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput}/>
          </label>
          <label>
            <img src="/img/podcast.png" alt="" classNameName="formImage"/>
            <input name="podcast" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput} />
          </label>
          <br/>
          <label>
            <img src="/img/nap.png" alt="" classNameName="formImage"/>
            <input name="nap" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput} />
          </label>
          <label>
            <img src="/img/breathe.png" alt="" classNameName="formImage"/>
            <input className="checkboxInput" name="breathwork" type="checkbox"
              checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
          <br/>
          <label>
            <img src="/img/walk.png" alt="" classNameName="formImage"/>
            <input name="walk" className="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput} />
          </label>
        <label>
            <img src="/img/news.png" alt="" classNameName="formImage"/>
            <input className="checkboxInput" name="news" type="checkbox" checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
        </form>
      </div>
    );
  }
}

export default MainAct;