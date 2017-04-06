import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
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
			  		<h5>Time</h5>
		     			<p>
		     			Mon - Fri  8 a.m. - 5 p.m. <br/>
							Weekends and evenings by  appointment. <br/>
							We can even do house calls.<br/>
							add social icons right here
							</p>
		      	</Col>
		      	<Col xs={12} md={3}>
		     			<h5>Address</h5>
		     			<p>Strategic Legal Group, PC. <br/>
									121 West Main Street, Suite F <br/>
									Turlock, CA 95380 <br/>
									Phone: (209) 683-1616<br/>
							</p>
		      	</Col>
		      	<Col xs={12} md={3}>
		     			<h5>Google maps will go right here</h5>
		     			<p>map</p>
		      	</Col>
		      	<Col xs={12} md={3}>
		     			<h5>Our Latest Tweets</h5>
							<p>Twitter widget will go right here</p>
							<Twitter />
		     		</Col>
	  			</Row>
	  		</div>
	  	</div>
    );
  }
}

export default Footer;