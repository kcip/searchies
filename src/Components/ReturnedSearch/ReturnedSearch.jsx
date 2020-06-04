import React from 'react'
import { Link } from 'react-router-dom'
import './returnedSearch.scss'
function ReturnedSearch(props) {
	let movies = props.searchDetails.results;
	return (

		<div className="searchDetails">

			{movies && movies.map(movie => (

				<Link to={`/movies/${movie.id}`}>
					<div className="searchDetails__container" key={movie.title}>
						<img className="searchDetails--img" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
						<div className="searchDetails">
							<p className="searchDetails--movieTitle">{movie.title}</p>
							<p className="searchDetails--releaseDate">{movie.release_date}</p>
						</div>

					</div>
				</Link>
			))}
		</div>

















	)
}



export default ReturnedSearch;






