import React from 'react';
import Header from './Header';
import { render } from 'react-dom'
import Landing from './Landing';
import Carousell from './Carousel';
import Team from './Team';
import BlogFrontPage from './BlogFrontPage';
import CustomReviews from './CustomReviews';
import SpecialOffers from './SpecialOffers';
import EstatePlanning from './EstatePlanning';
import ElderLaw from './ElderLaw';
import Business from './Business';
import RealEstate from './RealEstate';
import Footer from './Footer';
import About from './About';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';

const FrontPage = React.createClass({
  render() {
    return (
    	<div>
	    	<Header />
				<Landing />
				<Carousell />
				<Team />
				<BlogFrontPage />
				<CustomReviews />
				<SpecialOffers />
				<Footer />
			</div>
    )
  }
})

const AboutPage = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    )
  }
})

const EstatePlanningPage = React.createClass({
  render() {
    return (
    	<div>
	    	<Header />
				<EstatePlanning />
				<Footer />
			</div>
    )
  }
})

const ElderLawPage = React.createClass({
  render() {
    return (
    	<div>
	    	<Header />
				<ElderLaw />
				<Footer />
			</div>
    )
  }
})

const BusinessPage = React.createClass({
  render() {
    return (
    	<div>
	    	<Header />
				<Business />
				<Footer />
			</div>
    )
  }
})

const RealEstatePage = React.createClass({
  render() {
    return (
    	<div>
	    	<Header />
				<RealEstate />
				<Footer />
			</div>
    )
  }
})

render((
  <Router history={hashHistory}>
    <Route path="/" component={FrontPage}>
    </Route>
    <Route path="estate-planning" component={EstatePlanningPage}>
    </Route>
    <Route path="elder-law" component={ElderLawPage}>
    </Route>
    <Route path="business" component={BusinessPage}>
    </Route>
    <Route path="real-estate" component={RealEstatePage}>
    </Route>
    <Route path="about" component={AboutPage}>
    </Route>
  </Router>
), document.getElementById('front-page'))