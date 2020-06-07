import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './header.scss';

class Header extends Component {
	render() {
		return (

			<header className="header">
				<Link to="/" exact>
					<div className="header__logoWrapper">
						<p className="header__logoWrapper--logo">searchies...</p>
					</div>

				</Link>
			</header>


		)
	}
}
export default Header;