import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './movieStyles.scss'
import image from '../../Resources/missingImage.png'
class MovieCard extends Component {
	constructor(props) {
		super(props)
		//console.log(props.match.params.id)
		this.state = {
			movie: [],
			cast: [],
			crew: []
		}
	}

	fetchMovieData = async () => {
		// const id2 = this.props.match.params.name;
		// const api2 = `http://www.omdbapi.com/?t=${id2}&plot=full&apikey=fa5a080c`;
		// console.log(id2)

		const id = this.props.match.params.id;
		const apiKey = `api_key=e351c8e1959f24187d6ed7e01ee73981`;
		const apiURL = `https://api.themoviedb.org/3/movie/${id}?${apiKey}&language=en-US`;
		const castDetails = `https://api.themoviedb.org/3/movie/${id}/credits?${apiKey}`



		axios.get(castDetails).then(res => {
			console.log('crew', res.data.crew);
			console.log('cast', res.data.cast);
			this.setState({
				cast: res.data.cast,
				crew: res.data.crew
			})
		}).catch(error => {
			console.log(error)
		})
		axios.get(apiURL).then(response => {
			console.log(response)
			// axios.get(apiURL).then(response => {
			this.setState({

				movie: response.data
			})
			console.log('movie', response.data);
		}).catch(error => {
			console.log(error)
		})

	}

	componentDidMount() {
		this.fetchMovieData()
	}

	render() {
		return (

			<div className="outerWrapper">
				<div className="movieCard__wrapper">

					<div className="movieCard__image">
						<img className="movieCard__image--img" src={this.state.movie.poster_path && this.state.movie.poster_path != 'null' ? `https://image.tmdb.org/t/p/w400/${this.state.movie.poster_path}` : image} />
					</div>

					<div className="movie__details--tagline">
						<span className="movieCard__image--span">{this.state.movie.tagline}</span>
					</div>
					<div className="movieCard__details">
						<h3 className="movieCard__details--title">{this.state.movie.title}</h3>
					</div>


					<div className="movieCard__overview">
						<p className="movieCard__overview--p">{this.state.movie.overview}</p>
					</div>


					<div className="movieCard__castAndCrew cast">
						<h3>Cast</h3>
						{this.state.cast && this.state.cast.slice(0, 7).map((c => (
							<p>{c.name} : {c.character}</p>
						)))}
					</div>

					<div className="movieCard__castAndCrew crew">
						<h3>Crew</h3>
						{this.state.crew && this.state.crew.slice(0, 7).map((crew => (
							<p>{crew.name} : {crew.department}/{crew.job}</p>)))}
					</div>




					<h5 className="movieCard__details--releaseDate">Release Date: {this.state.movie.release_date}</h5>

				</div>

			</div>





		)
	}

}
export default withRouter(MovieCard);