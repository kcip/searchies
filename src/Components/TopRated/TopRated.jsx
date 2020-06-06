import React, { Component } from 'react'
import Axios from 'axios'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './topMovies.scss'
class TopRated extends Component {
	constructor() {
		super()

		this.state = {
			topMovies: [],
			topMovies2: []
		}
	}
	////for first slider pg.1 results
	componentDidMount = async () => {
		const apiKEY = `api_key=e351c8e1959f24187d6ed7e01ee73981`
		const topMovieAPI = `https://api.themoviedb.org/3/movie/popular?${apiKEY}&language=en-US&page=1`
		try {
			let apiData = await Axios(topMovieAPI)
			let data = apiData.data.results
			console.log('1st api call', data);
			this.setState({
				topMovies: data
			})

		} catch (error) {
			console.log(error)
		}

		const apiKEY2 = `api_key=e351c8e1959f24187d6ed7e01ee73981`
		const topMovieAPI2 = `https://api.themoviedb.org/3/movie/popular?${apiKEY2}&language=en-US&page=2`

		try {
			let apiData2 = await Axios(topMovieAPI2)
			let data2 = apiData2.data.results
			console.log(data2);
			this.setState({
				topMovies2: data2
			})

		} catch (error) {
			console.log(error)
		}

	}

	render() {
		const settings = {
			autoplay: true,
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 3,
			speed: 1500,
			autoPlayspeed: 3000,
			rows: 1,
			slidesPerRow: 2,
			cssEase: 'linear'
		}

		const settings2 = {
			autoplay: true,
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 3,
			speed: 2000,
			autoPlayspeed: 1500,
			rows: 1,
			slidesPerRow: 2,
			cssEase: 'linear'
		}




		return (
			<>
				<div className="topRated">
					<div className="topRated__textWrapper">
						<p className="topRated__textWrapper--text">popular movie choices</p>
					</div>
					<div className="topRated__wrapper margin-bottom">
						<Slider  {...settings}>
							{this.state.topMovies && this.state.topMovies.map((movie => (
								<div className="topRated__wrapper--images">
									<img className="topRated__wrapper--image" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
								</div>
							)))}
						</Slider>
					</div>

					<div className="topRated__wrapper">
						<Slider  {...settings2}>
							{this.state.topMovies2 && this.state.topMovies2.map((movie => (
								<div className="topRated__wrapper--images">
									<img className="topRated__wrapper--image" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
								</div>
							)))}
						</Slider>
					</div>
				</div>

			</>
		)
	}
}
export default TopRated;