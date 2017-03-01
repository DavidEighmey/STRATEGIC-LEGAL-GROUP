import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './CustomReviews.css';


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
			     			<p>"this will be the first customer review"</p>
			     			<h5>Customer 1</h5>
			      	</Col>
			      	<Col xs={12} md={3}>
			     			<p>"this will be the first customer review"</p>
			     			<h5>Customer 2</h5>
			      	</Col>
			      	<Col xs={12} md={3}>
			     			<p>"this will be the first customer review"</p>
			     			<h5>Customer 3</h5>
			      	</Col>
			      	<Col xs={12} md={3}>
			     			<p>"this will be the first customer review"</p>
			     			<h5>Customer 4</h5>
			     		</Col>
	    			</Row>
	    		</div>
	    	</div>
    );
  }
}

export default CustomReviews;