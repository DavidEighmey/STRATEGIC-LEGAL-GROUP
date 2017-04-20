import React, { Component } from 'react';
import businessLaw from './images/Business_Law-1.jpg';
import elderLaw from './images/Elder-Law-1.jpg';
import realEstate from './images/Real-Estate-1.jpg';
import estatePlanning from './images/Estate-Planning-1.jpg';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router';
import './Carousel.css';

const image_style = {
	'max-width': '100%',
	'margin': '0 auto',
 	'height': '600px'
};

const text_color = {
	'color': 'black',
	'font-weight': 'bold'
};

class Carousell extends Component{
  render(){
  	return (
		<Carousel>
				<Carousel.Item>
		      <img className="images-carousel" style={image_style} src={estatePlanning}/>
		      <Carousel.Caption>
		        <h1 style={text_color}>Estate Planning</h1>
		      	<Link to="/estate-planning"><button className="btn btn-default btn-lg"> Find Out More </button></Link>
		      </Carousel.Caption>
		    </Carousel.Item>
		    <Carousel.Item>
		      <img className="images-carousel" style={image_style} src={elderLaw}/>
		      <Carousel.Caption>
		        <h1 style={text_color}>Elder Law</h1>
		      	<Link to="/elder-law"><button className="btn btn-default btn-lg"> Find Out More </button></Link>
		      </Carousel.Caption>
		    </Carousel.Item>
		    <Carousel.Item>
		      <img className="images-carousel" style={image_style} src={businessLaw}/>
		      <Carousel.Caption>
		        <h1 style={text_color}>Business Law</h1>
		      	<Link to="/business"><button className="btn btn-default btn-lg"> Find Out More </button></Link>
		      </Carousel.Caption>
		    </Carousel.Item>
		    <Carousel.Item>
		      <img className="images-carousel" style={image_style} src={realEstate}/>
		      <Carousel.Caption>
		        <h1 style={text_color}>Farm/ Ranch/ Real Estate</h1>
		      	<Link to="/real-estate"><button className="btn btn-default btn-lg"> Find Out More </button></Link>
		      </Carousel.Caption>
		    </Carousel.Item>
		  </Carousel>
		);
  }
}

export default Carousell;