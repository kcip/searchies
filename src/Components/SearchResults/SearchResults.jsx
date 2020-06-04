import React, { Component } from 'react'
import './searchResults/searchResults.scss'
class SearchResults extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="searchResults">

				search results
				{props.movies.results && props.movies.results.map((movie =>
					(
						<div className="searchDetails__outerWrapper">
							<Link to={`/movies/${movie.id}`}>
								<div className="searchDetails__container" key={movie.title}>
									<img className="searchDetails--img" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
									<div className="searchDetails">
										<p className="searchDetails--movieTitle">{movie.title}</p>
										<p className="searchDetails--releaseDate">{movie.release_date}</p>
									</div>

								</div>
							</Link>
						</div>

					)))}
			</div>
		)
	}
}
export default SearchResults;