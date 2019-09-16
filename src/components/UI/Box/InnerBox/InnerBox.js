import React from 'react';

import classes from './InnerBox.module.scss';

const innerBox = (props) => <div className={classes.InnerBox}>{props.children}</div>;

export default innerBox;
