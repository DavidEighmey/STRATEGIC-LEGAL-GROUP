import React, { Component } from 'react';
import slg_logo from './SLG_Logo.png';
import facebook from './facebook.ico';
import twitter from './Twitter-icon.png';
import linkedin from './linkedin-512.png';
import { Link } from 'react-router'
import './App.css';

class Header extends Component{
  render(){
  	return (
	    <nav className="navbar navbar-default">
	      <div className="container-fluid">
	        <div className="navbar-header">
				    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="/">
        			<img alt="Brand" height="40" width="40"src={slg_logo} ></img>
      			</a>
	        </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        <li><Link className="nav-items" to="/estate-planning"><h4>Estate Planning</h4></Link></li>
			        <li><Link className="nav-items" to="/elder-law"><h4>Elder Law</h4></Link></li>
			        <li><Link className="nav-items" to="/business"><h4>Business</h4></Link></li>
			        <li><Link className="nav-items" to="/real-estate"><h4>Real Estate</h4></Link></li>
			      </ul>
			      <ul className="nav navbar-nav navbar-right">
			        <li><a href="https://www.facebook.com/SLCounsel/" target="_blank">
			        	<img alt="facebook" height="30" width="30"src={facebook} ></img>
			        </a></li>
			        <li><a href="https://twitter.com/LawNorcal" target="_blank">
			        	<img alt="twitter" height="30" width="30"src={twitter} ></img>
			        </a></li>
			        <li><a href="https://www.linkedin.com/in/aeighmey" target="_blank">
			        	<img alt="linkedin" height="30" width="30"src={linkedin} ></img>
			        </a></li>
			      </ul>
			      <form className="navbar-form navbar-right">
			        <div className="form-group">
			          <input type="text" className="form-control" placeholder="Search"></input>
			        </div>
			      </form>
			    </div>
	      </div>
	    </nav>
		);
  }
}

export default Header;
