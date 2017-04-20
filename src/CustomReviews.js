import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import yelp from './images/yelp.svg';

import './CustomReviews.css';

const fontPara = {
	'font-family': 'Times New Roman", Times, serif',
	'font-size': 'medium'
};
class CustomReviews extends Component {
  render() {
    return (
      	<div className="jumbotron">
  				<div className="container">
		        <h4>Customer Testimonials</h4>
		        <h2>
		          What Our Customers Think
		        </h2>
				  	<Row className="show-grid">
				  		<Col xs={12} md={3}>
			     			<p style={fontPara}>"Thank you Alan for all of your help creating our trust. You made it really easy for us to get it done (we were totally avoiding it). You are so easy to talk to and we trust you with everything! Thanks again! You’re the best!!!"</p>
			     			<h5>Crystal S.</h5>
			     			<a href="https://www.yelp.com/biz/strategic-legal-group-turlock" target="_blank"><img alt="Brand" height="45" width="60"src={yelp} ></img></a>
			      	</Col>
			      	<Col xs={12} md={3}>
			     			<p style={fontPara}>"I had a chance to sit down and speak with Esq. Alan Eighmey today regarding probate sales and real estate. He is very helpful and knowledgeable. What I like best is that he really cares and is a real person. I will definitely be recommending my real estate clients consult with Alan Eighmey if they need any legal advice about real estate law or trusts."</p>
			     			<h5>Kelly H.</h5>
			     			<a href="https://www.yelp.com/biz/strategic-legal-group-turlock" target="_blank"><img alt="Brand" height="45" width="60"src={yelp} ></img></a>
			      	</Col>
			      	<Col xs={12} md={3}>
			     			<p style={fontPara}>"What a great team of lawyers!!!!! Thank you guys for taking such great care of us. We appreciate your swift response and great legal advice followed by professional follow through."</p>
			     			<h5>Anokeen V.</h5>
			     			<a href="https://www.yelp.com/biz/strategic-legal-group-turlock" target="_blank"><img alt="Brand" height="45" width="60"src={yelp} ></img></a>
			      	</Col>
			      	<Col xs={12} md={3}>
			     			<p style={fontPara}>"Top notch for estate planning and employment law. Very knowledgeable and responsive.  I am impressed with the personal care they provide to their clients."</p>
			     			<h5>Rachel G.</h5>
			     			<a href="https://www.yelp.com/biz/strategic-legal-group-turlock" target="_blank"><img alt="Brand" height="45" width="60"src={yelp} ></img></a>
			     		</Col>
	    			</Row>
	    		</div>
	    	</div>
    );
  }
}

export default CustomReviews;