import React from 'react';
import {Link} from 'react-router-dom';

const ApartmentNavView = ({current}) => (
	<div className="nav">
		<nav>
			<ul>
				<li className={(current === 'home') ? 'current' : ''}>
					<Link to="/">Home</Link>
				</li>
				<li className={(current === 'locations') ? 'current' : ''}>
					<Link to="/locations">Locations</Link>
				</li>
				<li className={(current === 'search') ? 'current' : ''}>
					<Link to="/search">search</Link>
				</li>
			</ul>
		</nav>
	</div>
);

export default ApartmentNavView;