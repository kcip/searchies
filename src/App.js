import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Search from './Components/Search/Search'
import MovieCard from './Components/MovieCard/MovieCard'
import Footer from './Components/Footer/Footer'
import './App.css'

class App extends Component {
	render() {
		return (
			<>

				<Header />

				<Switch>
					{/* <div className="searchContainer"> */}
					<Route path="/" component={Search} exact />
					{/* </div> */}
				</Switch>



				<Switch>
					{/* <div className="movieDetailContainer"> */}
					<Route path="/movies/:id" component={MovieCard} exact />
					{/* </div> */}
				</Switch>


				<Footer />

			</>
		)
	}
}

export default App;