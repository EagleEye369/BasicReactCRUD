import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Login from "./components/login";
import Courses from "./components/Courses";
import PageNotFound from "./components/pagenotfound";
import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import NewCourse from "./components/NewCourse";
import Addstudent from "./components/Addstudent";
import Updatestudent from "./components/UpdateStudent";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/courses" component={Courses} />
        <Route path="/register" component={Addstudent} />
        <Route path="/addNewCourse" component={NewCourse} />
        <Route path="/login" component={Login} />
        <Route path="/update" component={Updatestudent} />
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
