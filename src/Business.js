import React, { Component } from 'react';
import businessLaw from './images/Business_Law-2.jpg';
import './ElderLaw.css';


class Business extends Component{
  render(){
  	return (
  		<div>
  			<img className="images-carousel" src={businessLaw}/>
	  		<div className="jumbotron">
	  			<div className="container">
		  			<div className="landing-background">
			  			<h1 className="elder-law-center">Business</h1>
			  			<p>
			  				Strategic Legal Group specializes in representing businesses and companies in all areas of business law. We provide practical solutions to our clients’ business needs. Our expertise and business knowledge allows us to become our clients’ strategic partner. We take a great deal of pride in not only forming personal relationships with our clients, but also in gaining an in-depth understanding of our clients’ needs. We offer creative and practical solutions to our clients including:
			  			</p>
			  			<p>
				  			<ul>
									<li>Business Entity Formation</li>
									<li>Mergers, Acquisitions, Reorganizations and Dissolutions</li>
									<li>Transactions involving the Purchase, Sale, Leasing and Operation of Real Estate</li>
									<li>Contract Drafting and Analysis</li>
									<li>Employment Law Counseling and Compliance</li>
									<li>Asset Recovery/Collections</li>
								</ul>
							</p>
							<p>
								Our primary purpose is to assist businesses through all stages of their development, including their creation and beyond. We specialize in working with small businesses.  At our firm, there are no small clients.  We are here to assist companies in getting started, creating a stable foundation and experiencing solid growth.  We work with our clients to develop strong and viable growth strategies.  Oftentimes these strategies include sound legal guidance where it is possible to resolve business disputes before they become costly legal battles.  An experienced business attorney can help you identify risks and opportunities that may otherwise go unnoticed.
							</p>
			  			<h3 className="elder-law-center">
			  			Contact Us: (209) 683-1616
			  			</h3>
		  			</div>
		  		</div>
				</div>
			</div>
		);
  }
}

export default Business;
