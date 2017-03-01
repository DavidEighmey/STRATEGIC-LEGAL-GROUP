import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import './index.css';
	
ReactDOM.render(
	<Header />,
	document.getElementById('header')
);


ReactDOM.render(
	<Footer />,
	document.getElementById('footer')
);