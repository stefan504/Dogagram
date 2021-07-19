import React from 'react';
import '../components/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="nav-container">
			<Link to="/">
				<div className="logo">Visit Novi Sad</div>
			</Link>
			<div className="nav-items">
				<ul className="list">
					<Link to="/news">
						<li className="list-items">New in NS</li>
					</Link>
					<Link to="/explore">
						<li className="list-items">Explore</li>
					</Link>
					<Link to="/stay&plan">
						<li className="list-items">Stay & Plan</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
