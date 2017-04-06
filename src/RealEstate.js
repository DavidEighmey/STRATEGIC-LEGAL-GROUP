import React, { Component } from 'react';
import realEstate from './images/Real-Estate-1.png';
import './ElderLaw.css';


class RealEstate extends Component{
  render(){
  	return (
  		<div>
  			<img className="images-carousel" src={realEstate}/>
	  		<div className="jumbotron">
	  			<div className="container">
		  			<div className="landing-background">
			  			<h1 className="elder-law-center">Farm/ Ranch/ Real Estate</h1>
							<p>
			  				The area of agricultural law does not focus on a narrow area of law, but rather encompasses many areas of business law.  Today, agricultural business, landowners, growers, packers and producers need lawyers with skills in as many areas as any other business.  Having attorneys that know agriculture and the law is essential to success.  We represent clients in all areas including:
			  			</p>
			  			<p>
				  			<ul>
									<li>Property Acquisition and Sale</li>
									<li>Contract Disputes</li>
									<li>Water Rights</li>
									<li>Environmental Compliance</li>
									<li>Easement and Boundary Issues</li>
									<li>Succession and Estate Planning</li>
									<li>Sales and Distribution</li>
									<li>Liability Protection</li>
									<li>Employment Counseling</li>
									<li>Crop and Grazing Leases</li>
								</ul>
							</p>
							<p>
								Our firm understands the unique legal challenges lying within any agricultural issue.  We place special emphasis on assisting members of our Central Valley agricultural community.  Whether you are interested in increasing your business, starting a new farm, ranch or dairy or want to protect the legacy you already have, we are here to help.
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


export default RealEstate;

