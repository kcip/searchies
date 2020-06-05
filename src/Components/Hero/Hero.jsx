import React from 'react'
import './hero.scss'
import heroImage from '.../Resources/hero.jpg'
function Hero() {
	const image = heroImage
	return (
		<div className="hero" style={{ backgroundImage: `url(${image})` }}>
			<div>
				<h1>hero here</h1>
			</div>
		</div>
	)
}
export default Hero