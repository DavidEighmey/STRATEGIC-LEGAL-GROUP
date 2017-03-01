import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Landing from './Landing';
import Carousell from './Carousel';
import Team from './Team';
import BlogFrontPage from './BlogFrontPage';
import CustomReviews from './CustomReviews';
import SpecialOffers from './SpecialOffers';
import Footer from './Footer';
import './index.css';
	
ReactDOM.render(
	<Header />,
	document.getElementById('header')
);

ReactDOM.render(
	<Landing />,
	document.getElementById('landing')
);

ReactDOM.render(
	<Carousell />,
	document.getElementById('carousel')
);

ReactDOM.render(
	<Team />,
	document.getElementById('team')
);

ReactDOM.render(
	<BlogFrontPage />,
	document.getElementById('blog-front-page')
);

ReactDOM.render(
	<CustomReviews />,
	document.getElementById('custom-reviews')
);

ReactDOM.render(
	<SpecialOffers />,
	document.getElementById('special-offers')
);

ReactDOM.render(
	<Footer />,
	document.getElementById('footer')
);