import React, { Component } from 'react'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'
//css files
import './main.css'
class Main extends Component {
	render() {
		return (
			<>
				<Header />
				<main className="main">
					<Search />
				</main>

				<Footer />
			</>
		)
	}
}
export default Main