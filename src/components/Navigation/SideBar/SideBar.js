import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideBar.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideBar = (props) => {
	let attachedClasses = [classes.SideBar, classes.Close];
	if (props.open) {
		attachedClasses = [classes.SideBar, classes.Open];
	}
	return (
		<>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(' ')} onClick={props.closed}>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</>
	);
};

export default sideBar;
