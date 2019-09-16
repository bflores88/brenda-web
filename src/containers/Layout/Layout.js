import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.scss';
import SideBar from '../../components/Navigation/SideBar/SideBar';

class Layout extends Component {
	state = {
		showSideBar: false,
	};

	sideBarCloseHandler = () => {
		this.setState({
			showSideBar: false,
		});
	};

	sideBarToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideBar: !prevState.showSideBar };
		});
	};
	render() {
		return (
			<>
				<Toolbar barToggleClicked={this.sideBarToggleHandler} />
				<SideBar open={this.state.showSideBar} closed={this.sideBarCloseHandler} />
				<main className={classes.Content}>{this.props.children}</main>
			</>
		);
	}
}

export default Layout;
