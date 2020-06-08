import React, { Component } from 'react'
import axios from 'axios';
import Form from '../Form/Form'
import ReturnedSearch from '../ReturnedSearch/ReturnedSearch'
import '../Hero/hero.scss'
import './main.css'
import SiteInfo from '../SiteInfo/SiteInfo'
import TopRated from '../TopRated/TopRated';
import Aside from '../Aside/Aside'
import Features from '../Features/Features'
class Main extends Component {
	constructor() {
		super()

		this.state = {
			movies: [],
			searchFieldValue: '',
			loading: false,
			message: '',
		}
		this.cancel = '';
	}
	//prevent multiple api calls (https://github.com/axios/axios)
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
					<div className="hero">
						<Form
							handleChange={this.handleChange}
							value={searchFieldValue}
						/>
					</div>
					<SiteInfo />
					<TopRated />
					<Aside />
					<Features />
					{this.state.loading ?
						<ReturnedSearch searchDetails={this.state.movies} /> : false
					}
				</main>
			</>
		)
	}
}
export default Main;