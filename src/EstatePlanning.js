import React, { Component } from 'react';
import estatePlanning from './images/Estate-Planning-2.jpg';
import './ElderLaw.css';


class EstatePlanning extends Component{
  render(){
  	return (
  		<div>
	  		<img className="images-carousel" src={estatePlanning}/>
	  		<div className="jumbotron">
	  			<div className="container">
		  			<div className="landing-background">
			  			<h1 className="elder-law-center">Estate Planning: Wills/ Trusts/ Probate</h1>
			  			<p>
			  				As we age, our needs also change. We realize that we have different responsibilities as we move through life. From the young parent who needs to protect their children in case they are unable; to those looking to protect their assets and pass a legacy to future generations. We are here to assist you with your planning each step of the way. We provide you with a comprehensive plan that can include:
			  			</p>
			  			<p>
				  			<ul>
									<li>Wills</li>
									<li>Trusts</li>
									<li>Power of Attorney</li>
									<li>Health Care Directives</li>
									<li>Probate and Estate and Trust Administration</li>
								</ul>
							</p>
							<p>
								If you have lost a loved one, we are there for you. We can help you through the complex probate process. We also provide estate and trust administration. We are here to help you through this trying time. Our caring and understanding staff will keep you informed each step of the way. You do not need to be alone in this process we are here for you. 
							</p>
			  			<h3 className="elder-law-center">
			  			Phone: (209) 683-1616
			  			</h3>
		  			</div>
		  		</div>
				</div>
			</div>
		);
  }
}

export default EstatePlanning;
