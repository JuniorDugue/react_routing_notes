import React from "react";
import ReactDOM from "react-dom";
// add react router dependncy using yarn add react-router-dom and youll wrap the <App/> component within the <Router> component
import { BrowserRouter as Router } from "react-router-dom";
//remember to after creating a CRA.. to cd into the app folder, and then run npm or yarn for react-router-dom

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
