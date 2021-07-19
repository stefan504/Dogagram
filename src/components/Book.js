import React from 'react';
import park from '../assets/images/hotel-park.jpg';
import pupin from '../assets/images/hotel-pupin.jpg';
import prezident from '../assets/images/prezident.jpg';
import sheraton from '../assets/images/sheraton.jpg';
import palace from '../assets/images/palace.jpg';

import './Book.css';
const Book = () => {
	return (
		<div className="book-container">
			<div className="book-text">
				<h2>Book a Hotel</h2>
			</div>
			<div className="hotel-container">
				<div className="hotels">
					<div className="img-container">
						<img src={park} alt="hotelpark" />
					</div>
					<h2>Hotel Park</h2>
					<p>Novi Sad</p>
					<a
						className="book-now"
						target="_blank"
						href="https://www.booking.com/hotel/rs/h-t-u-p-park-a-d-novi-sad.en-gb.html?aid=356980;label=gog235jc-1DCAsowQFCGWgtdC11LXAtcGFyay1hLWQtbm92aS1zYWRIM1gDaMEBiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALchNWHBsACAdICJDc3NmRlZWNhLTc3ZWItNGU1MC05MGZlLWViMzFiMjdiN2EzN9gCBOACAQ;sid=e8e36b9dbbf451d379d1dd7dcb45c9b5;dist=0;keep_landing=1;sb_price_type=total;type=total;sig=v1cpPEJvLj"
					>
						Book now
					</a>
				</div>
				<div className="hotels">
					<div className="img-container">
						<img src={pupin} alt="hotelpupin" />
					</div>
					<h2>Hotel Pupin</h2>
					<p>Novi Sad/Stari grad</p>
					<a
						className="book-now"
						target="_blank"
						href="https://www.booking.com/hotel/rs/pupin-novi-sad.sr.html"
					>
						Book now
					</a>
				</div>
				<div className="hotels">
					<div className="img-container">
						<img src={prezident} alt="hotelpark" />
					</div>
					<h2>Hotel Prezident</h2>
					<p>Novi Sad/Grbavica</p>
					<a
						className="book-now"
						target="_blank"
						href="https://www.booking.com/hotel/rs/prezident.en-gb.html?aid=318615;label=English_Serbia_EN_RS_28510503985-iF2zsmV8snwMdJQZEJ6bmwS112436907025%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi2645820507%3Atiaud-297601666995%3Adsa-322199494071%3Alp21213%3Ali%3Adec%3Adm;sid=e8e36b9dbbf451d379d1dd7dcb45c9b5;dest_id=-90313;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1626689257;srpvid=d2b94734433e00af;type=total;ucfs=1;sig=v1wG-cTCs4#hotelTmpl"
					>
						Book now
					</a>
				</div>
				<div className="hotels">
					<div className="img-container">
						<img src={sheraton} alt="hotelpark" />
					</div>
					<h2>Hotel Sheraton</h2>
					<p>Novi Sad/Detelinara</p>
					<a
						className="book-now"
						target="_blank"
						href="https://www.booking.com/hotel/rs/sheraton-novi-sad.en-gb.html?aid=356980;label=gog235jc-1DCAsowQFCEXNoZXJhdG9uLW5vdmktc2FkSDNYA2jBAYgBAZgBCbgBF8gBDNgBA-gBAYgCAagCA7gCvZ3VhwbAAgHSAiRlMTc2NGFkMS00ZGVmLTQ2OGQtODRhNS0yMDhmMmIxZDQ3Y2TYAgTgAgE;sid=e8e36b9dbbf451d379d1dd7dcb45c9b5;dist=0;group_adults=2;group_children=0;keep_landing=1;no_rooms=1;sb_price_type=total;type=total;sig=v1isA06OyP"
					>
						Book now
					</a>
				</div>
				<div className="hotels">
					<div className="img-container">
						<img src={palace} alt="palacevilla" />
					</div>
					<h2>Villa Palace</h2>
					<p>Novi Sad/Bocke</p>
					<a
						className="book-now"
						target="_blank"
						href="https://www.booking.com/hotel/rs/villa-palace.en-gb.html?aid=318615;label=New_English_EN_RS_26768405665-H3_xhB2DPM3RUoREKWRWQgS217243532823%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666995%3Adsa-912298700321%3Alp21213%3Ali%3Adec%3Adm;sid=e8e36b9dbbf451d379d1dd7dcb45c9b5;dest_id=-90313;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1626689177;srpvid=bbff470cc89e012a;type=total;ucfs=1;sig=v1denRelMt#hotelTmpl"
					>
						Book now
					</a>
				</div>
			</div>
		</div>
	);
};

export default Book;
