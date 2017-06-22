import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(){
	return(
		<div className='navbar-fixed'>
			<nav>      
	              <div className="Main-header fixed">
	                  <div className='container'>
	                    <div id='navbar-row' className='row'>
	                      <h2><a href="/" className="brand-logo">Victor and Chad</a></h2>
					      <ul id="nav-mobile" className="right">
					        <li><Link to="sass.html">Where It All Began</Link></li>
					        <li><Link to="/photos">Photos</Link></li>
					        <li><Link to="/accommodations">Accommodations</Link></li>
					        <li><Link to="collapsible.html">Log Out</Link></li>
					      </ul>
	                    </div>                        
	                  </div>
	              </div>
	        </nav>
	    </div>
	)
}

export default NavBar