import React from 'react';
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/">About</NavigationItem>
		<NavigationItem link="/projects">Projects</NavigationItem>
		<NavigationItem link="/contact">Contact</NavigationItem>
	</ul>
);

export default navigationItems;
