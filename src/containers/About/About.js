import React, { Component } from 'react';
import classes from './About.module.scss';
import Box from '../../components/UI/Box/Box';

class About extends Component {
	render() {
		return (
			<>
				<Box>
					<h1> Hi, I'm Brenda!</h1>

					<p>I am a Software Engineer.</p>
				</Box>
			</>
		);
	}
}

export default About;
