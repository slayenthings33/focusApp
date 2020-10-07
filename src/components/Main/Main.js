import React, {Component} from 'react';
import FormCA from '../FormCA/FormCA';
import './Main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo: this.props.logo,
      text: this.props.text
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.logo} alt="Logo"/>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Main;