import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Team extends Component{
  render(){
  	return (
  		<div className="jumbotron">
  			<div className="container">
		  			<h2>The Team</h2>
	  			   <Row className="show-grid">
				      <Col xs={12} md={4}>

				     		<h3>Julianna </h3>
				     		<p>Creative Director</p>

				      </Col>
				      <Col xs={12} md={4}>
				      	<h3>Gus </h3>
				      	<p>Select social links from ign.com are automatically included in your Team Section</p>
				      </Col>
				      <Col xs={12} md={4}>
				     		<h3>Sarita </h3>
				      	<p>Select social links from ign.com are automatically included in your Team Section</p>
				     	</Col>
				    </Row>
	  		</div>
			</div>
		);
  }
}

export default Team;
