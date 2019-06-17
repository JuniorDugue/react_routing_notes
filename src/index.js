import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import ItemList from "./ItemList";
{
  /*  
add react router dependncy using yarn add react-router-dom and youll wrap the 
<App/> component within the <Router> component
*/
}
import { BrowserRouter as Router, Route } from "react-router-dom";
{
  /*
remember after creating a CRA.. to cd into the app folder, and then 
run npm or yarn for react-router-dom, then npm / yarn start
*/
}
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      // <Router>
      // you can also wrap your main div App in router component as well
      //         as an alternative to wrapping the <App/>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Route path="/" component={Home} />{" "}
        {/* when using Route, import Route as well e.g. import { BrowserRouter as Router, Route } from "react-router-dom"; */}
        <Route path="/item-list" component={ItemList} />
      </div>
      // </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
