import React from 'react'
import "./siteInfo.scss"
import image from '../../Resources/sofa.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function SiteInfo() {
	return (
		<div className="siteInfo__container">
			<div className="siteInfo__container--side leftSide">
				<img className="siteInfo__container--img" src={`${image}`} alt="sofa" />
			</div>
			<div className="siteInfo__container--side rightSide">
				<p className="siteInfo--text mainText">Searchies...</p>
				<p className="siteInfo--text subText">
					<span className="fontAwesomeIcon">
						<FontAwesomeIcon icon={faQuoteLeft} color="#E1E1E0" />
					</span>
					<span className="callout--text">home for all your movie needs</span>
					<span className="fontAwesomeIcon">
						<FontAwesomeIcon icon={faQuoteRight} color="#E1E1E0" />
					</span>
				</p>
			</div>
		</div>
	)
}
export default SiteInfo;