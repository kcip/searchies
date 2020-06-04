import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Search from './Components/Search/Search'
import Main from './Components/Main/Main'
import MovieCard from './Components/MovieCard/MovieCard'
import Footer from './Components/Footer/Footer'
import './App.css'

class App extends Component {
	render() {
		return (
			<>

				<Header />

				<Switch>
					<Route path="/" component={Search} exact />
					<Route path="/main" component={Main} exact />
					<Route path="/movies/:id" component={MovieCard} exact />
				</Switch>

				<Footer />

			</>
		)
	}
}

export default App;