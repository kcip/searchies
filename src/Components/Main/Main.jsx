import React, { Component } from 'react'
import axios from 'axios';
import Form from '../Form/Form'
import ReturnedSearch from '../ReturnedSearch/ReturnedSearch'
import Hero from '../Hero/Hero'
import './main.css'

// import '../Search/search.scss'

class Main extends Component {
	constructor() {
		super()

		this.state = {
			movies: [],
			searchFieldValue: '',
			loading: true,
			message: ''
		}
		this.cancel = '';
	}

	//fetch data from api
	fetchApiResults = (searchFieldValue) => {
		const extra = `&append_to_response=credits,videos`;
		const apiKey = `api_key=e351c8e1959f24187d6ed7e01ee73981`;
		const apiURL = `https://api.themoviedb.org/3/search/movie?${apiKey}${extra}&language=en-US&query=${searchFieldValue}&page=1&include_adult=false`;

		if (this.cancel) {
			this.cancel.cancel()
		}
		this.cancel = axios.CancelToken.source()
		axios.get(apiURL, {
			CancelToken: this.cancel.token
		}).then(res => {
			this.setState({
				movies: res.data
			})
		}).catch(error => {
			if (axios.isCancel(error) || error) {
				this.setState({
					loading: false,
					message: 'error'
				});
			}
		});
	}

	handleChange = (e) => {
		const searchFieldValue = e.target.value;
		this.setState({
			searchFieldValue: searchFieldValue,
			loading: true,
			message: ''
		}, () => {
			this.fetchApiResults(searchFieldValue)
		})
	}



	render() {
		const { searchFieldValue } = this.state
		return (
			<>

				<main className="main">

					<div><i className="fab fa-adn"></i></div>
					<div className="hero">
						<Form
							handleChange={this.handleChange}
							value={searchFieldValue}
						/>
					</div>


					<h2>Search Results</h2>
					<ReturnedSearch searchDetails={this.state.movies} />

				</main>



			</>
		)
	}
}
export default Main;