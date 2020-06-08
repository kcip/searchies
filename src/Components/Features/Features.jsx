import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './features.scss'

class Features extends Component {
	constructor() {
		super()

		this.state = {
			newMovies: [],
			comingSoonMovies: []
		}
	}

	componentDidMount = async () => {
		const apiKey = `api_key=e351c8e1959f24187d6ed7e01ee73981`;
		//newMovies
		const newMovieAPI = `https://api.themoviedb.org/3/movie/now_playing?${apiKey}&language=en-US&page=1`;

		//comingSoon
		const comingSoonMovieAPI = `https://api.themoviedb.org/3/movie/upcoming?${apiKey}&language=en-US&page=1`;

		try {
			const nmAPI = await axios(newMovieAPI);
			const csAPI = await axios(comingSoonMovieAPI);
			const data1 = nmAPI.data.results
			const data2 = csAPI.data.results
			this.setState({
				newMovies: data1,
				comingSoonMovies: data2
			})

		} catch (error) {
			console.log(error)
		}
	}

	render() {
		return (
			<div className="features">
				<div className="features__wrapper">
					<p className="features--text text-left">coming soon</p>
					{this.state.comingSoonMovies && this.state.comingSoonMovies.slice(0, 6).map(((movie, idx) => (
						<div className="features--container" key={idx}>
							<Link to={`/comingSoon`}>
								<img className="features--img" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
							</Link>
						</div>
					)))}
				</div>
				<div className="features__wrapper">
					<p className="features--text text-right">new movies</p>
					{this.state.newMovies && this.state.newMovies.slice(0, 6).map(((movie, idx) => (
						<div className="features--container" key={idx}>
							<Link to={`/newRelease`}>
								<img className="features--img" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
							</Link>
						</div>
					)))}
				</div>
			</div>
		)
	}
}

export default Features;