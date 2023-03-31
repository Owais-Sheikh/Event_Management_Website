import React from 'react'
import SliderPro, { Autoplay, Buttons, Thumbnails } from 'slider-pro-js';
import 'slider-pro-js/css';


const slider = () => {
	document.addEventListener( 'DOMContentLoaded', () => {
		const mySlider = new SliderPro( '#my-slider', {
			width: '100vw',
			height: '100vh',
			autoplay: true,
			...
		});
	});
    document.addEventListener( 'DOMContentLoaded', () => {
		const mySlider = new SliderPro( '#my-slider', {
			addOns: [ Autoplay, Buttons, Thumbnails ],
			width: '100vw',
			...
		});
	});
  return (
    <div className="slider-pro" id="my-slider">
	<div className="sp-slides">
		<div className="sp-slide">
			<img className="sp-image" src="path/to/image1.jpg"/>
		</div>
		
		<div className="sp-slide">
			<p>Lorem ipsum dolor sit amet</p>
		</div>
		
		<div className="sp-slide">
			<h3 className="sp-layer">Lorem ipsum dolor sit amet</h3>
			<p className="sp-layer">consectetur adipisicing elit</p>
		</div>
	</div>
</div>

  )
}

export default slider