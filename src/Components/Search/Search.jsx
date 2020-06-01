import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './search.css'
import '../SearchDetails/SearchDetails'
class Search extends Component {
	constructor() {
		super()

		this.state = {
			movies: [],
			searchFieldValue: '',
			loading: true,
			message: ''
		}
		//prevent multiple api calls
		this.cancel = ''
	}
	//fetch search data from api, newPageNum = ''
	fetchApiResults = (searchFieldValue) => {
		//const pageNum = newPageNum ? `&page=${pageNum}` : '';
		const apiKey = `api_key=e351c8e1959f24187d6ed7e01ee73981`;
		const apiURL = `https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&query=${searchFieldValue}&page=1&include_adult=false`;
		//prevent multiple api calls (add axios refernece later)
		if (this.cancel) {
			this.cancel.cancel()
		}
		this.cancel = axios.CancelToken.source()
		axios.get(apiURL, {
			CancelToken: this.cancel.token
		}).then(res => {
			console.log(res.data);
			this.setState({
				movies: res.data
			})
		}).catch(error => {
			if (axios.isCancel(error) || error) {
				this.setState({
					loading: false,
					message: 'api error'
				});
			}
		});

	}

	movieSearchField = (e) => {
		const searchFieldValue = e.target.value
		this.setState({
			searchFieldValue: searchFieldValue,
			loading: true,
			message: ''

		}, () => {
			this.fetchApiResults(searchFieldValue)
		});
	}













	render() {
		const imagePath = `https://image.tmdb.org/t/p/w500`
		const { searchFieldValue } = this.state
		return (
			<div className="search-container">
				<form className='serch-form'>
					<input
						onChange={this.movieSearchField}
						type='search'
						placeholder='search movies'
						value={searchFieldValue}
						name='searchValue'
						id='search-input'
					/>
				</form>

				<div className="searchResults">
					{this.state.movies.results && this.state.movies.results.map((movie =>
						(
							<div>
								<h3>{movie.title}</h3>
								<img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
							</div>
						)))}
				</div>

			</div>
		)
	}
}
export default withRouter(Search);