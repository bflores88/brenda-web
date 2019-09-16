import React from 'react';
import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import BarToggle from '../SideBar/BarToggle/BarToggle';

const toolbar = (props) => (
	<header className={classes.Toolbar}>
		<BarToggle clicked={props.barToggleClicked} />
		<nav className={classes.Desktop}>
			<NavigationItems />
		</nav>
	</header>
);

export default toolbar;
