import React from 'react';

const Book = () => {
	return (
		<div className="book-container">
			<div className="book-text">Book a Hotel</div>
			<div className="hotel-container">
				<div className="hotels">
					<div className="img-container">
						<img src="../assets/images/hotel-park.jpg" alt="hotelpark" />
					</div>
					<h2>Hotel Park</h2>
					<p>Novi Sad</p>
					<a
						target="_blank"
						href="https://www.booking.com/hotel/rs/h-t-u-p-park-a-d-novi-sad.en-gb.html?aid=356980;label=gog235jc-1DCAsowQFCGWgtdC11LXAtcGFyay1hLWQtbm92aS1zYWRIM1gDaMEBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALchNWHBsACAdICJDc3NmRlZWNhLTc3ZWItNGU1MC05MGZlLWViMzFiMjdiN2EzN9gCBOACAQ;sid=e8e36b9dbbf451d379d1dd7dcb45c9b5;dist=0;keep_landing=1;sb_price_type=total;type=total;sig=v1cpPEJvLj"
					>
						Book now
					</a>
				</div>
			</div>
		</div>
	);
};

export default Book;
