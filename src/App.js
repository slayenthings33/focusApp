import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Link, Route} from "react-router-dom"
import CreateAccount from "./components/CreateAccount/CreateAccount";
import AboutYou from "./components/AboutYou/AboutYou";
import Activities from "./components/Activities/Activities";
import AppBehavior from "./components/AppBehavior/AppBehavior";
import PrincipalPage from "./components/PrincipalPage/PrincipalPage";
import WelcomePage from "./components/WelcomePage/WelcomePage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={WelcomePage}/>
          <Route  path="/CreateAccount" component={CreateAccount}/>
        </Switch> 
      </BrowserRouter>
      <AboutYou />

      <Activities title="Activities" text="How would you like to spend your breaks?"/>

      <AppBehavior title="App Behavior"/>

      <PrincipalPage title="Main Page"/>
    </div>
  );
}

export default App;




// LOGIN PAGE

// App
//     WelcomePage
//         Head
          //      h1
//         Main 
//             h2 
//         Foot 
//             button 
//     AboutYou
//         Head
//             h1
//             p 
//         Main
//             form
//         Foot
//             button
//     Activities
//         Head
//             h1
//             p 
//         Main
//             a*9
//         Foot
//             button
//     AppBehavior
//         Head
//             h1
//             p 
//         Main
//             choiceBtns
//             p 
//             form
//         Foot
//             button
//     PrincipalPage
//         Head
//             h1
//         Main
//             img
//             p 
        
    