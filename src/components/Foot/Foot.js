import React, { Component } from 'react';
import './Foot.css';
import {Switch,Route} from "react-router-dom";
import CreateAccount from '../CreateAccount/CreateAccount';
import UserChoice from '../UserChoice/UserChoice';
import AboutYou from '../AboutYou/AboutYou';
import Activities from '../Activities/Activities';
import AppBehavior from '../AppBehavior/AppBehavior';
import PrincipalPage from '../PrincipalPage/PrincipalPage';

class Foot extends Component {
  constructor(props){
    super(props);
    this.state = {
    
    };
  }


  render() {
    return (
      <div id="btnContainer">
        {/* <Switch>
          <Route exact path="/CreateAccount" componennt={CreateAccount}/>
          <Route path="/AboutYou" component={AboutYou} />
          <Route path="/Activities" component={Activities} />
          <Route path="/AppBehavior" component={AppBehavior} />
          <Route path="/UserChoice" component={UserChoice} />
          <Route path="/PrincipalPage" component={PrincipalPage} />
        </Switch> */}

      </div>
    );
  }
}

export default Foot;