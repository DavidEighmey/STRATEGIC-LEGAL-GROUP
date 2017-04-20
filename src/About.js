import React, { Component } from 'react';
import AboutUs from './images/Hero-1.jpg';
import './ElderLaw.css';


class About extends Component{
  render(){
  	return (
  		<div>
  			<img className="images-carousel" src={AboutUs}/>
	  		<div className="jumbotron">
	  			<div className="container">
		  			<div className="landing-background">
			  			<h1 className="elder-law-center">About</h1>
			  			<p className="site-description">
								We provide quality legal services and expert representation for clients in the Central Valley and throughout California.  When it comes to matters of the law, what you don’t know can often hurt you. We help you from the beginning, giving you the personalized attention you deserve.
							<br/>
							</p>
			  			<h3 className="elder-law-center">
			  			Contact Us: (209) 683-1616<br/>
			  			Email: alan@norcal-law.com
			  			</h3>
		  			</div>
		  		</div>
				</div>
			</div>
		);
  }
}

export default About;
