import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Landing from './Landing';
import Carousell from './Carousel';
import Team from './Team';
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
