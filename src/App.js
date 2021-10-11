import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory,
  IndexRoute,
  Switch,
} from "react-router-dom";

//import all the pages
import Homepage from "./Components/homePage";
import Register from "./Components/register";
import Records from "./Components/records";
import ViewPage from "./Components/viewPage";
import ProfilePage from "./Components/profilePage";
import "./styles.css";
import "./stylesViewPage.css";

// Using this page to route between different pages

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Records" component={Records} />
          <Route exact path="/ViewPage/:patientId" component={ViewPage} />
          <Route exact path="/Profile/:patientId" component={ProfilePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
