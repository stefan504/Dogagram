import React from 'react';
import '../components/Landing.css';

const Landing = () => {
	return (
		<div className="landing-container">
			<div className="text-box">
				<h2>
					Welcome to <br /> <span className="color">Novi Sad!</span>
				</h2>
				<button className="explore-btn">Explore</button>
			</div>
		</div>
	);
};

export default Landing;
