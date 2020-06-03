import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './MovieCard.css'

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



			<div className="moveCard__wrapper">

				<div className="movieCard__image--div">
					<img className="movieCard__image--img" src={`https://image.tmdb.org/t/p/w400/${this.state.movie.poster_path}`} />
					<span className="movieCard__image--span">{this.state.movie.tagline}</span>
				</div>


				<div className="movieCard__details--wrapper">
					<h3 className="movieCard__details--title">{this.state.movie.title}</h3>
					<h5 className="movieCard__details--releaseDate">{this.state.movie.release_date}</h5>
				</div>


				<div className="moveCard__overview">
					<p className="movieCard__overview--p">{this.state.movie.overview}</p>
				</div>



				{this.state.cast && this.state.cast.slice(0, 7).map((c => (
					<ul>
						<li>{c.character} : {c.name}</li>
					</ul>

				)))}

				{this.state.crew && this.state.crew.slice(0, 7).map(crew => <p>{crew.name} : {crew.department}/{crew.job}</p>)}



			</div>



		)
	}

}
export default withRouter(MovieCard);