import React, {Component} from 'react';
import FormCA from '../FormCA/FormCA';
import './Main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      logo: this.props.logo,
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.logo} alt="Logo"/>
        <FormCA/>
      </div>
    );
  }
}

export default Main;