import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from "./views/ClassComponent"
import FunctionComponent from "./views/FunctionComponent"
import HomePage from './views/HomePage';
import UserPage from './views/UserPage';
import RouterPage from './views/RouterPage';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return <div className="App">
    {/* <ClassComponent/> */}
    {/* <FunctionComponent/> */}
    {/* <HomePage/>
    <UserPage/> */}
    <RouterPage/>
  </div>
}

export default App;
