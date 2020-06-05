import React from 'react'
import "./siteInfo.scss"
import image from '../../Resources/sofa.jpg'


function SiteInfo() {
	return (
		<div className="siteInfo__container">
			<div className="siteInfo__container--side leftSide">
				<img className="siteInfo__container--img" src={`${image}`} alt="sofa" />


			</div>
			<div className="siteInfo__container--side rightSide">
				<p className="siteInfo--text mainText">Searchies...</p>
				<p className="siteInfo--text subText">" home for all your movie needs "</p>
			</div>
		</div>
	)
}
export default SiteInfo;