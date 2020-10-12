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
      <div class="formContainer">
        <form >
          <label class="labelContainer">
            <img class="formImage" src="/img/yoga.png" alt=""/>
            <input class="checkboxInput" name="yoga"
              type="checkbox"
              checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
          <label class="labelContainer">
            <img class="formImage" src="/img/meditate.png" alt=""/>
            <input name="meditation" class="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput}/>
          </label>
          <br/>
          <label>
            <img src="/img/exercise.png" alt="" className="formImage"/>
            <input name="exercise" class="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput}/>
          </label>
          <label>
            <img src="/img/podcast.png" alt="" className="formImage"/>
            <input name="podcast" class="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput} />
          </label>
          <br/>
          <label>
            <img src="/img/nap.png" alt="" className="formImage"/>
            <input name="nap" class="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput} />
          </label>
          <label>
            <img src="/img/breathe.png" alt="" className="formImage"/>
            <input class="checkboxInput" name="breathwork" type="checkbox"
              checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
          <br/>
          <label>
            <img src="/img/walk.png" alt="" className="formImage"/>
            <input name="walk" class="checkboxInput" type="checkbox" checked={this.state.unselected} onChange={this.toggleInput} />
          </label>
        <label>
            <img src="/img/news.png" alt="" className="formImage"/>
            <input class="checkboxInput" name="news" type="checkbox" checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
        </form>
      </div>
    );
  }
}

export default MainAct;