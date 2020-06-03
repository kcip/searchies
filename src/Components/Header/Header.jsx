import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import './header.css';

class Header extends Component {
	render() {
		return (

			<header className="header">
				<Link to="/" exact>
					<p>header</p>
				</Link>
			</header>


		)
	}
}
export default Header;