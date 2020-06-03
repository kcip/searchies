import React, { Component } from 'react'
import { Link } from "react-router-dom";
//import axios from 'axios';
class SearchDetails extends Component {

	render() {
		let movies = this.props.movieDetails;
		//console.log(movies)
		return (
			<div>
				<Link to={`/movies/${movies.id}`}>
					<div className="searchDetails__container" key={movies.title}>
						<img className="searchDetails--img" src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`} />
						<div className="searchDetails">
							<p className="searchDetails--movieTitle">{movies.title}</p>
							<p className="searchDetails--releaseDate">{movies.release_date}</p>
						</div>

					</div>
				</Link>
			</div>
		)
	}
}


export default SearchDetails;