import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Editing from "./pages/EditStory";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StoryContent from "./pages/Details";
import Dashboard from "./components/Dashboard";
import Notfound from "./pages/Notfound";
import AuthRoute from "./helpers/AuthRoute";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <AuthRoute exact path="/dashboard" component={Dashboard} />
          <AuthRoute exact path="/stories/:id" component={StoryContent} />
          <AuthRoute exact path="/story/edit/:id" component={Editing} />
          <AuthRoute exact path="/profile" component={Profile} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
