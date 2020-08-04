import React from 'react';
import './nav.styles.css';
import logo from './poweredby_nytimes_150b.png';
import {Link} from 'react-router-dom';

function Nav ({timer}) {
	return (
	<>
		<nav className="navbar navbar-expand-md navbar-dark nav1">
		
			<div className="logo navbar-brand">
				<a href="https://developer.nytimes.com"><img src={logo} className="App-logo " alt="Logo" /></a>
				
			</div>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
			<div className= "collapse navbar-collapse" id="navbarSupportedContent">
				<ul className= "navLinks navbar-nav mr-auto nav-ul">
				<Link to = "/" className="navItem nav-link">
				     <li className= "navItem nav-item">Home </li></ Link>
				<Link to = "/health" className="navItem nav-link" >
				     <li className= "navItem nav-item">Health </li></ Link>
				     <Link to = "/sports" className="navItem nav-link" >
				     <li className= "navItem nav-item">Sports </li></ Link>
				
				</ul>
				<h5 className="timerDisplay"> {timer}</h5>
			</div>

		
		</nav>


		


</>
		);
}

export default Nav;