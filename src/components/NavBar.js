import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props){
	var form = localStorage.token ? <a onClick={ () => props.logout() } >Log out</a> : <Link to='/login'>Log In</Link>

	window.$(document).ready(function() {
            window.$(".button-collapse").sideNav({
            	closeOnClick: true,
            })
    });

	return(
		<div className='navbar'>
			<nav>      
	              <div className="Main-header">
	                  <div className='container'>
	                    <div id='navbar-row' className='row'>
	                      <a href="/" className="brand-logo headline-text hide-on-med-and-down">Victor and Chad's Wedding</a>
	                      <a href="/" data-activates="mobile-demo" className="button-collapse brand-logo headline-text left">Victor and Chad's Wedding</a>
					      <ul id="mobile-demo" className="side-nav">
					      	<li><Link to="/">Home</Link></li>
					        <li><Link to="/whereitallbegan">How It All Began</Link></li>
					        <li><Link to="/photos">Photos</Link></li>
					        <li><Link to="/accommodations">Accommodations</Link></li>
					        <li><Link to="/giftideas">Gift Ideas</Link></li>
					        <li>{form}</li>
					      </ul>
					      <ul id="nav-mobile" className="right hide-on-med-and-down">
					        <li><Link to="/whereitallbegan">How It All Began</Link></li>
					        <li><Link to="/photos">Photos</Link></li>
					        <li><Link to="/accommodations">Accommodations</Link></li>
					        <li><Link to="/giftideas">Gift Ideas</Link></li>
					        <li>{form}</li>
					      </ul>
	                    </div>                        
	                  </div>
	              </div>
	        </nav>
	    </div>
	)
}

export default NavBar