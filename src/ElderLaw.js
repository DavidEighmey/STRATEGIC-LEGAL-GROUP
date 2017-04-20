import React, { Component } from 'react';
import elderLaw from './images/Elder-Law-2.jpg';
import './ElderLaw.css';


class ElderLaw extends Component{
  render(){
  	return (
  		<div>
  			<img className="images-carousel" src={elderLaw}/>
	  		<div className="jumbotron">
	  			<div className="container">
		  			<div className="landing-background">
			  			<h1 className="elder-law-center">Elder Law</h1>
							<p>
								Elder Law and Medi-Cal planning involves preparing clients and their families for long term nursing care. Over 70% of people over the age of 65 can expect to use some form of long term care during their life.  With a cost of $90,000 - $110,000 annually a family's assets can be depleted quickly, leaving you or your loved ones destitute. We can show you how to protect the family's assets and still qualify for nursing home care.
							</p>
							<p>
								Families are oven in crisis when dealing with the need to find care for a loved one. We can assist in navigating the often complex and confusing process of qualifying for Medi-Cal. Best of all we can show you how to qualify for Medi-Cal benefits to pay for that much needed care while saving you or your loved ones assets.
							</p>
							<p>
								We can also see if you or your loved one qualifies for veterans benefits to help pay for care. Aid and Attendance is an underutilized benefit that can help pay for a veteran's health care and other needs.
							</p>
							<p>
								Our office also assist the families of special needs children and adults by showing families how to provide for their special needs without jeopardizing their benefits.
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

export default ElderLaw;
