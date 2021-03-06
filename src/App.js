import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import CreateAccount from "./components/CreateAccount/CreateAccount";
import AboutYou from "./components/AboutYou/AboutYou";
import Activities from "./components/Activities/Activities";
import AppBehavior from "./components/AppBehavior/AppBehavior";
import PrincipalPage from "./components/PrincipalPage/PrincipalPage";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import UserChoice from './components/UserChoice/UserChoice';
import GraphPage from './components/GraphPage/GraphPage';
import AboutUs from './components/AboutUs/AboutUs';
import { UserProvider } from './components/userContext';
import 'bootstrap/dist/css/bootstrap.min.css';

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase/firebaseConfig';

// import * as firebaseui from "firebaseui";

import { FirebaseAppProvider } from 'reactfire';



function App() {
  const context = React.createContext();
  const Consumer = context.Consumer;
  const Provider = context.Provider;
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <Provider value={{ name: "", activities: [""], likedContent: [""], method: "", workHoursToday: "", mood: "" }}>
              <Route exact path="/" link={<Link to='/WelcomePage'>Welcome Page</Link>}>
                <WelcomePage title="Welcome to" />
              </Route>
              <Route exact path="/CreateAccount" link={<Link to='/CreateAccount'>Create Account</Link>}>
                <CreateAccount title="Create Account" />
              </Route>
              <Route exact path="/AboutYou" link={<Link to='/AboutYou'>About You</Link>}>
                <AboutYou title="About You" />
              </Route>
              <Route exact path="/Activities" link={<Link to='/Activities'>Activities</Link>}>
                <Activities title="Activities" />
              </Route>
              <Route exact path="/UserChoice" link={<Link to='/UserChoice'>User Choice</Link>}>
                <UserChoice title="Are you likely to enjoy this content?" />
              </Route>
              <Route exact path="/AboutUs" link={<Link to='/AboutUs'>About Us</Link>}>
                <AboutUs />
              </Route>
              <Route exact path="/AppBehavior" link={<Link to='/AppBehavior'>App Behavior</Link>}>
                <AppBehavior />
              </Route>
              <Route exact path="/PrincipalPage" link={<Link to='/PrincipalPage'>Principal Page</Link>}>
                <PrincipalPage />
              </Route>
              <Route exact path="/GraphPage" link={<Link to='/GraphPage'>Graph Page</Link>}>
                <GraphPage />
              </Route>
            </Provider>
          </FirebaseAppProvider>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
//export {Provider};



// LOGIN PAGE

// App
//     WelcomePage
//         Head
//             h1
//         MainWP 
//             h2 
//         Foot 
//             button 
// CreateAccount
//         Head
//             h1 
//         Main
//             form
//             a*2
//         Foot
//             button
//    AboutYou
//         Head
//             h1
//             p 
//         Main
//             form
//         Foot
//             button
//    Activities
//         Head
//             h1
//             p 
//         Main
//             a*9
//         Foot
//             button
//   UserChoice
//         Head 
//             h1 
//         Main 
//             img 
//             p 
//         Foot 
//             a*2 
//    AboutUs
//         Main
//             p
//         Foot
//             button
//    AppBehavior
//         Head
//             h1
//             p 
//         Main
//             choiceBtns
//             p 
//             form
//         Foot
//             button
//    PrincipalPage
//         Head
//             h1
//         Main
//             img
//             p 
//    GraphPage
//         Head
//             h1 
//         Main
//             img 
//         Foot
//             button

