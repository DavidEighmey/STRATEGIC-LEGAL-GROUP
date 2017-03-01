import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './BlogFrontPage.css';


class BlogFrontPage extends Component {
  render() {
    return (
      <div className="blog-front-page">
        <h1>Our Blog
        <button className="btn btn-default btn-lg" id="view-blog-button">View Blog</button>
        </h1>
        <h2>
          Latests Updates
        </h2>
		  	<Row className="show-grid">
	      	<Col xs={12} md={4}>

	     			<h3>Blog1 </h3>
	     			<p>this will be the first and latest blog! its gonna be awesome we can give a summary here</p>
	      		<a href="">Continue reading <span className="glyphicon glyphicon-chevron-right"></span></a>

	      	</Col>
	      	<Col xs={12} md={4}>
	      	
	      		<h3>Blog 2: title </h3>
	      		<p>this will be the second and second latest blog!! its gonna be awesome</p>
	      		<a href="">Continue reading <span className="glyphicon glyphicon-chevron-right"></span></a>

	      	</Col>
	      	<Col xs={12} md={4}>
	     			<h3>Blog 3 title </h3>
	      		<p>this will be the third and the thrid most blog and latest blog! its gonna be awesome</p>
	      		<a href="">Continue reading <span className="glyphicon glyphicon-chevron-right"></span></a>
	     		</Col>
	    	</Row>
      </div>
    );
  }
}

export default BlogFrontPage;