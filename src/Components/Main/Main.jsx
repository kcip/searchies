import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../Header/Header'
import Search from '../Search/Search'
import MovieCard from '../MovieCard/MovieCard'
import Footer from '../Footer/Footer'
//css files
import './main.css'
class Main extends Component {
	render() {
		return (
			<>
				<Router>
					<Header />
					<main className="main">
						<Switch>
							<Search />
							<Route path="/movies/" component={MovieCard} />
						</Switch>

					</main>

					<Footer />
				</Router>

			</>
		)
	}
}
export default Main;