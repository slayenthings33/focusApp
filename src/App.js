import React from 'react';
import './App.css';
import CreateAccount from "./components/CreateAccount/CreateAccount";
import AboutYou from "./components/AboutYou/AboutYou";
import Activities from "./components/Activities/Activities";
import AppBehavior from "./components/AppBehavior/AppBehavior";
import PrincipalPage from "./components/PrincipalPage/PrincipalPage";



function App() {
  return (
    <div className="App">
      <CreateAccount title="Create Account" />

      <AboutYou title="About You" text="Tell us a bit about yourself"/>

      <Activities title="Activities" text="How would you like to spend your breaks?"/>

      <AppBehavior title="App Behavior"/>

      <PrincipalPage title="Main Page"/>
    </div>
  );
}

export default App;




// LOGIN PAGE

// App
//     CreateAccount
//         Head
//             h1
//         Main
//             logo
//             Form
//                  form
//         Foot
//             button*2
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
        
    