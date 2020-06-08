import React, { Component } from 'react'
import axios from 'axios'
import './search.scss'
import SearchDetails from '../SearchDetails/SearchDetails'
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

	fetchApiResults = (searchFieldValue) => {
		const extra = `&append_to_response=credits,videos`
		const apiKey = `api_key=e351c8e1959f24187d6ed7e01ee73981`;
		const apiURL = `https://api.themoviedb.org/3/search/movie?${apiKey}${extra}&language=en-US&query=${searchFieldValue}&page=1&include_adult=false`;
		//prevent multiple api calls (https://github.com/axios/axios)
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
					message: 'api error'
				});
			}
		});

	}

	handleChange = (e) => {
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
		const { searchFieldValue } = this.state
		return (
			<div class="outerWrapper">
				<div className="searchContainer">
					<form className='search-form'>
						<input
							onChange={this.handleChange}
							type='search'
							placeholder='search movies'
							value={searchFieldValue}
							name='searchValue'
							id='search-input'
							autoComplete="off"
						/>

					</form>
				</div>
				<div className="searchResults">
					{this.state.movies.results && this.state.movies.results.map((movie =>
						(
							<SearchDetails movieDetails={movie} />

						)))}
				</div>
			</div>

		)
	}
}
export default Search;