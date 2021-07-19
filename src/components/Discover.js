import React from 'react';
import './Discover.css';
const Discover = () => {
	return (
		<div className="discover">
			<div className="discover-container">
				<div className="line">
					<h3>
						Discovering Novi Sad has never been easier! <br /> You only have to
						choose which experience you want.
					</h3>
				</div>
			</div>

			<div className="grid-container">
				<div className="grid-item grid-1">Free things to do in Novi Sad</div>
				<div className="grid-item grid-2">Romantic Novi Sad</div>
				<div className="grid-item grid-3">Novi Sad with kids</div>
				<div className="grid-item grid-4">Zagreb for Seniors</div>
				<div className="grid-item grid-5">Pet Friendly attractions</div>
			</div>
		</div>
	);
};

export default Discover;
