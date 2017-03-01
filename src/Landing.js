import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component{
  render(){
  	return (
  		<div className="jumbotron">
  			<div className="container">
	  			<div className="landing-background">
		  			<h1 className="site-header page-header">Strategic Legal Group</h1>
		  			<h3 className="site-description">
		  				We provide quality legal services and expert representation for clients in the Central Valley and throughout California. When it comes to matters of the law, what you don’t know can often hurt you. We help you from the beginning, giving you the personalized attention you deserve.
		  			</h3>
		  			<h3>
		  			Phone: (209) 683-1616
		  			</h3>
		  			<button className="btn btn-default btn-lg"> About Us </button>
	  			</div>
	  		</div>
			</div>
		);
  }
}

export default Landing;
