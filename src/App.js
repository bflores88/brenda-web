import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";
import "./components/UI/TextFadeIn/TextFadeIn.scss";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/personal" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} exact />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
