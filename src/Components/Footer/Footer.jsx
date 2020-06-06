import React, { Component } from 'react'
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./footer.scss"
//import { Link } from 'react-router-dom'
//import { withRouter } from 'react-router-dom'


class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer__content">
					<div className="footer__content--apiInfo">
						<p>@searchies made possible by</p>
						<img className="apiLogo" src="https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="api logo" />
						<p><a className="urlLink" href="https://www.themoviedb.org/" target="_blank">The Movie Database API</a></p>
					</div>
				</div>
			</footer>
		)
	}
}
export default Footer;