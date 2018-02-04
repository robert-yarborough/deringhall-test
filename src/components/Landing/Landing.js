import React from 'react';
import { Link } from 'react-router-dom';

import './landing.scss';

const Landing =() => (
	<div className="group landing">
		<Link to="/designers" className="landing_btn">Browse All</Link>
	</div>
);



export default Landing;