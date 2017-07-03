import React from 'react';
import { Slider, Slide } from 'react-materialize'

function Photos(){
	return(
		<div id="photo-slide">
			<div className='row'>
				<Slider id="photo-slide">
					<Slide
						id="photo-slide"
						src="./images/Kids.jpg"
						title="The Boys"
						>
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/piedmont-park-2002.png"
						title="Piedmont Park 2002"
						placement="right">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/may-2002.jpg"
						title="May 2002"
						placement="right">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/first-xmas-12-25-08.jpg"
						title="Our First Christmas 12-25-08"
						placement="left">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/NYE-1-1-09.png"
						title="New Year's Eve 12-31-09"
						placement="right">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/our-place-2010.png"
						title="Our Place 2010"
						placement="right">
						
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/anniversary-2011.jpg"
						title="Anniversary 2011"
						placement="left">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/frolicking-8-13-11.jpg"
						title="Frolicking 8-13-11"
						placement="right">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/yuletide-12-23-12.png"
						title="Yuletide 12-23-12"
						placement="right">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/out-to-lunch-7-24-13.jpg"
						title="Out-to-lunch 7-24-13"
						placement="left">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/provincetown-8-25-13.jpg"
						title="Provincetown 8-25-13"
						placement="left">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/victors-birthday-2014.jpg"
						title="Victor's Birthday 2014"
						placement="right">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/engagement-8-15-14.jpg"
						title="Engagement 8-15-14"
						placement="right">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/xmas-2014.png"
						title="Christmas 12-25-14"
						placement="left">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/july-fourth-15.png"
						title="July Fourth 2015"
						>
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/carnegie-hall-opening-night-10-7-15.png"
						title="Carnegie Hall Opening Night 10-7-15"
						placement="right">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/Chads-birthday-2016.png"
						title="Chad's Birthday 6-7-16"
						placement="right">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/battle-recital-11-13-16.png"
						title="Kathleen Battle's Recital 11-13-16"
						placement="left">
					</Slide>
					<Slide
						id="photo-slide"
						src="./images/xmas-12-25-2016.png"
						title="Christmas 12-25-16"
						placement="right">
					</Slide>
				</Slider>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
			</div>
	    </div>
	       
	)

}

export default Photos