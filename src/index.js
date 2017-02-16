import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Landing from './Landing';
import './index.css';
	
ReactDOM.render(
	<Header />,
	document.getElementById('header')
);

ReactDOM.render(
	<Landing />,
	document.getElementById('landing')
);
