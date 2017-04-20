import React, { Component } from 'react';
import { Link } from 'react-router';
import AboutUs from './images/Hero-1.jpg';


import './Landing.css';

const floatRight = {
	'float': 'right',
};
const header = {
	'text-align': 'center'
};


class Landing extends Component{
  render(){
  	return (
  		<div className="jumbotron slgBackground">
  			<div className="container">
	  			<div className="landing-background">
		  			<h1 className="site-header page-header" style={header}>Strategic Legal Group</h1>
		  			<h3 className="site-description">
		  				We provide quality legal services and expert representation for clients in the Central Valley and throughout California. When it comes to matters of the law, what you don’t know can often hurt you. We help you from the beginning, giving you the personalized attention you deserve.
		  			</h3>
		  			<h3>
		  			Contact Us: (209) 683-1616
		  			<Link to="/about"><button style={floatRight} className="btn btn-default btn-lg"> About Us </button></Link>
		  			</h3>
	  			</div>
	  		</div>
			</div>
		);
  }
}

export default Landing;
