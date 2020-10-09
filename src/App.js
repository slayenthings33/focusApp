import React from 'react';
import './App.css';
import {BrowserRouter,Switch, Route} from "react-router-dom"
import AboutYou from "./components/AboutYou/AboutYou";
import Activities from "./components/Activities/Activities";
import AppBehavior from "./components/AppBehavior/AppBehavior";
import PrincipalPage from "./components/PrincipalPage/PrincipalPage";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import UserChoice from './components/UserChoice/UserChoice';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={WelcomePage}/>
          <Route  path="/AboutYou" component={AboutYou}/>
          <Route  path="/AppBehavior" component={AppBehavior}/>
          <Route  path="/Activities" component={Activities}/>
          <Route  path="/UserChoice" component={UserChoice}/>
        </Switch> 
      </BrowserRouter>
      <AboutYou />

      <Activities title="Activities" text="How would you like to spend your breaks?"/>

      <UserChoice/>

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
//             h1
//         Main 
//             h2 
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
//    PrincipalPage
//         Head
//             h1
//         Main
//             img
//             p 
        
    