import React, { Component } from 'react'
import axios from 'axios'
import './comingSoon.scss'
import image from '../../Resources/missingImage.png'
import heroImage from '../../Resources/hero3.jpg'
class ComingSoon extends Component {
	constructor() {
		super()

		this.state = {
			comingSoonMovies: [],
			display: false
		}
	}
	componentDidMount = async () => {
		const apiKey = `api_key=e351c8e1959f24187d6ed7e01ee73981`;
		//comingSoon
		const comingSoonMovieAPI = `https://api.themoviedb.org/3/movie/upcoming?${apiKey}&language=en-US&page=1`;

		try {
			const csAPI = await axios(comingSoonMovieAPI);
			const data2 = csAPI.data.results
			this.setState({

				comingSoonMovies: data2
			})

		} catch (error) {
			console.log(error)
		}
	}
	showMore = () => {
		this.setState({
			display: !this.state.display
		})
	}
	render() {
		return (
			<div className="movieListContainer">
				<div className="topHero" style={{ backgroundImage: `url(${heroImage})` }}>
					<h2>coming soon</h2>
					<p>to a theatre near you</p>
				</div>


				<div className="movieList--wrapper">
					{this.state.comingSoonMovies && this.state.comingSoonMovies.map((movie => (
						<div className="movieList">
							<div className="image__container">
								<img className="image__container--image" src={movie.poster__path != 'null' ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : image} />
							</div>
							<div className="movieList__paragraph">
								<div className="readMore" onClick={this.showMore}>read more</div>
								{this.state.display && (
									<div>
										<h4>overview:</h4>
										<p className="movieList__paragraph--p">
											{movie.overview}
										</p>
										<div className="movieList__paragraph--p">
											<h5>coming to theatres:</h5>
											<p>{movie.release_date}</p>
										</div>
									</div>

								)}

							</div>


						</div>




					)))}
				</div>
			</div>
		)
	}
}

export default ComingSoon;