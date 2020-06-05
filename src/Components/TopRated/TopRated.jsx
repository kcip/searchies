import React, { Component } from 'react'
import Axios from 'axios'
import './topMovies.scss'
class TopRated extends Component {
	constructor() {
		super()

		this.state = {
			topMovies: [],
			page: 1
		}
	}

	componentDidMount = async () => {
		// const pageNum
		const apiKEY = `api_key=e351c8e1959f24187d6ed7e01ee73981`
		const topMovieAPI = `https://api.themoviedb.org/3/movie/popular?${apiKEY}&language=en-US&page=1`

		try {
			let apiData = await Axios(topMovieAPI)
			let data = apiData.data.results
			console.log(data);
			this.setState({
				topMovies: data
			})

		} catch (error) {
			console.log(error)
		}

	}





	render() {
		return (
			<div className="topRatedWrapper">
				{this.state.topMovies && this.state.topMovies.map((movie => (
					<div className="topRated">
						<img className="topRated--img" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
						{/* <p>{movie.title}</p>
						<p>{movie.release_data}</p>
						<p>{movie.overview}</p> */}

					</div>
				)))}
			</div>
		)
	}
}
export default TopRated;