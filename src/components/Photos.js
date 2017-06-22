import React, { Component } from 'react';

function Photos(){
	return(
			<div className='photo container'>
	          	<div className='row'>
		          	<div className='col s12'>	
			          <div className='card col s3 offset-s1'>
				          	<div className='card-image'>
				          		<img src='./images/cheeky.jpg'/>
				          		<div class="card-content">
					              <p>Being Cheeky</p>
					            </div>
				          	</div>
			          </div>  
			          <div className='card col s3'>
			          		<div className='card-image'>
				          		<img src='./images/anniversary-2011.jpg'/>
				          		<div class="card-content">
					              <p>They're in Love!</p>
					            </div>
				          	</div>
				       </div>
				       <div className='card col s3'>
			          		<div className='card-image'>
				          		<img src='./images/july-7-15.jpg'/>
				          		<div class="card-content">
					              <p>Shall we frolick today?</p>
					            </div>
				          	</div>
				       </div>
			        </div>  
		         </div>
		         <div className='row'>
		          	<div className='col s12'>	
			          <div className='card col s3 offset-s1'>
				          	<div className='card-image'>
				          		<img src='./images/hello-dolly-5-17-17.jpg'/>
				          		<div class="card-content">
					              <p>Being Cheeky</p>
					            </div>
				          	</div>
			          </div>  
			          <div className='card col s3'>
			          		<div className='card-image'>
				          		<img src='./images/xmas-2014.jpg'/>
				          		<div class="card-content">
					              <p>They're in Love!</p>
					            </div>
				          	</div>
				       </div>
				       <div className='card col s3'>
			          		<div className='card-image'>
				          		<img src='./images/provincetown.jpg'/>
				          		<div class="card-content">
					              <p>Shall we frolick today?</p>
					            </div>
				          	</div>
				       </div>
			        </div>  
		         </div>
		    </div>
	       
	)

}

export default Photos