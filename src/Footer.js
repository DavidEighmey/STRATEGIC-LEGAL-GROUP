import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Timeline } from 'react-twitter-widgets';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import './Footer.css';

const Twitter = () => (
		<div>
			<a className="twitter-timeline" data-width="220" data-height="200" href="https://twitter.com/LawNorcal" src="//platform.twitter.com/widgets.js">Tweets by LawNorcal</a>
			<div src="//platform.twitter.com/widgets.js"></div>
		</div>
	);

class Footer extends Component {
  render() {
    return (
	  	<div className="footer-background">
	  		<div className="footer-content">
			  	<Row className="show-grid">
			  		<Col xs={12} md={3}>
			  		<h4>Site Map</h4>
				  		<Link to="/">Home</Link><br/>
				  		<Link to="/about">About Us</Link><br/>
				  		<Link to="/">Blog</Link><br/>
				  		<Link to="/estate-planning">Estate Planning</Link><br/>
				  		<Link to="/elder-law">Elder Law</Link><br/>
				  		<Link to="/business">Business</Link><br/>
				  		<Link to="/real-estate">Real Estate</Link><br/>
		      	</Col>
		      	<Col xs={12} md={3}>
		     			<h4>Address</h4>
		     			<p>Strategic Legal Group, PC. <br/>
									121 West Main Street, Suite F <br/>
									Turlock, CA 95380 <br/><br/>
									Phone: (209) 683-1616<br/><br/>
									Mon - Fri  8am - 5pm<br/>
									Weekends and evenings by  appointment.<br/>
									We can even do house calls.<br/>
							</p>
		      	</Col>
		      	<Col xs={12} md={3}>
		     			<h5>Google maps will go right here</h5>
		     			<p>map</p>
		      	</Col>
		      	<Col xs={12} md={3}>
		      	<div className="twitter">
							<Timeline
						    dataSource={{
						      sourceType: 'profile',
						      screenName: 'LawNorcal'
						    }}
						    options={{
						      username: 'LawNorcal',
						      height: '300'
						    }}
						  />
						 </div>
		     		</Col>
	  			</Row>
	  		</div>
	  	</div>
    );
  }
}

export default Footer;