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
      return this.state.unselected
    } else {
      return this.state.unselected
    }
  }

  render() {
    return (
      <div>
        <form >
          <label>
            Yoga:
            <input
              name="yoga"
              type="checkbox"
              checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
          <label>
            Meditation:
            <input
              name="meditation"
              type="checkbox"
              checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
          <br/>
          <label>
            Exercise:
            <input
              name="exercise"
              type="checkbox"
              checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
          <label>
            Podcast:
            <input
              name="podcast"
              type="checkbox"
              checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
          <br/>
          <label>
            Nap:
            <input
              name="nap"
              type="checkbox"
              checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
          <label>
            Breathwork:
            <input
              name="breathwork"
              type="checkbox"
              checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
          <br/>
          <label>
            Walk:
            <input
              name="walk"
              type="checkbox"
              checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
        <label>
            News:
            <input
              name="news"
              type="checkbox"
              checked={this.state.unselected}
              onChange={this.toggleInput} />
          </label>
        </form>
      </div>
    );
  }
}

export default MainAct;
{/* <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br /> */}