import React, { Component } from 'react'
import { Link } from "react-router-dom";
//import axios from 'axios';
class SearchDetails extends Component {

	render() {
		let movies = this.props.movieDetails;
		//console.log(movies)
		return (
			<>
				<Link to={`/movies/${movies.id}`}>
					<div className="searchDetails-results" key={movies.title}>
						<img className="movieCard-img" src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`} />
						<p>{movies.title}</p>
						<p>{movies.release_date}</p>
					</div>
				</Link>
			</>
		)
	}
}


export default SearchDetails;