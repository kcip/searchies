import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
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
export default withRouter(Header);