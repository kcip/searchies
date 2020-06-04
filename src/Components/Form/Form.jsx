import React from 'react'
import './form.scss'

const Form = (props) => {
	//form for searching 
	return (
		<div class="outerWrapper">
			<div className="searchContainer">
				<form className='search-form'>
					<input
						onChange={props.handleChange}
						type='search'
						placeholder='search movies...'
						value={props.searchFieldValue}
						name='searchValue'
						id='search-input'
						autoComplete="off"
					/>
				</form>
			</div>
		</div>
	)
}
export default Form