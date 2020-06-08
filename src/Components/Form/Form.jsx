import React from 'react'
import './form.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Form = (props) => {

	return (

		<div className="searchContainer">
			<form className='search-form'>
				<span className="fontAwesomeIcon search">
					<FontAwesomeIcon icon={faSearch} color="#1E2429" />
				</span>
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

	)
}
export default Form