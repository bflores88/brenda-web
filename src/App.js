import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout />
				<Switch>
					<Route path="/" component={About} exact />
					<Route path="/contact" component={Contact} />
				</Switch>
			</div>
		);
	}
}

export default App;
