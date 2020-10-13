import React, {Component} from 'react';
import './FormCA.css';

className FormCA extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:''
    };
  }
 
  render() {
    return (
      <div>
        <form action="POST">
          <label htmlFor="email">Email: </label>
          <input type="text" value={this.state.email}/> <br/><br/>
          <label htmlFor="password">Password: </label>
          <input type="text" value={this.state.password}/> <br/><br/>
          <input type="button" value="GET STARTED"/>
        </form>
      </div>
    );
  }
}

export default FormCA;