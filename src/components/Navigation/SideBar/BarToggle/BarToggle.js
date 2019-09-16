import React from 'react';
import classes from './BarToggle.module.scss';

const drawerToggle = (props) => (
	<div onClick={props.clicked} className={classes.DrawerToggle}>
		<i className="fas fa-caret-square-down" />
	</div>
);

export default drawerToggle;
