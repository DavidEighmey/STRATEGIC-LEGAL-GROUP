import React, { Component } from 'react';
import businessLaw from './img/business-law.jpg';
import elderLaw from './img/elderLaw.jpeg';
import realEstate from './img/real-estate.jpeg';
import estatePlanning from './img/estateplanning.jpeg';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router';


class Carousell extends Component{
  render(){
  	return (
		<Carousel>
				<Carousel.Item>
		      <img width={900} height={500} alt="900x500" src={estatePlanning}/>
		      <Carousel.Caption>
		        <h1>Estate Planning</h1>
		        <p>As we age, our needs also change. We realize that we have different responsibilities as we move through life. From the young parent who needs to protect their children in case they are unable; to those looking to protect their assets and pass a legacy to future generations.</p>
		      	<Link to="/estate-planning"><button className="btn btn-default btn-lg"> Find Out More </button></Link>
		      </Carousel.Caption>
		    </Carousel.Item>
		    <Carousel.Item>
		      <img width={900} height={500} alt="900x500" src={elderLaw}/>
		      <Carousel.Caption>
		        <h1>Elder Law</h1>
		        <p>Elder Law and Medi-Cal planning involves preparing clients and their families for long term nursing care. Over 70% of people over the age of 65 can expect to use some form of long term care during their life.  With a cost of $90,000 - $110,000 annually a family's assets can be depleted quickly, leaving you or your loved ones destitute. We can show you how to protect the family's assets and still qualify for nursing home care.</p>
		      	<Link to="/elder-law"><button className="btn btn-default btn-lg"> Find Out More </button></Link>
		      </Carousel.Caption>
		    </Carousel.Item>
		    <Carousel.Item>
		      <img width={900} height={500} alt="900x500" src={businessLaw}/>
		      <Carousel.Caption>
		        <h1>Business Law</h1>
		        <p>Strategic Legal Group specializes in representing businesses and companies in all areas of business law. We provide practical solutions to our clients’ business needs. Our expertise and business knowledge allows us to become our clients’ strategic partner. We take a great deal of pride in not only forming personal relationships with our clients, but also in gaining an in-depth understanding of our clients’ needs. </p>
		      	<Link to="/business"><button className="btn btn-default btn-lg"> Find Out More </button></Link>
		      </Carousel.Caption>
		    </Carousel.Item>
		    <Carousel.Item>
		      <img width={900} height={500} alt="900x500" src={realEstate}/>
		      <Carousel.Caption>
		        <h1>Farm/ Ranch/ Real Estate</h1>
		        <p>The area of agricultural law does not focus on a narrow area of law, but rather encompasses many areas of business law.  Today, agricultural business, landowners, growers, packers and producers need lawyers with skills in as many areas as any other business.  Having attorneys that know agriculture and the law is essential to success.</p>
		      	<Link to="/real-estate"><button className="btn btn-default btn-lg"> Find Out More </button></Link>
		      </Carousel.Caption>
		    </Carousel.Item>
		  </Carousel>
		);
  }
}

export default Carousell;