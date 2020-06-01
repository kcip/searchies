import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
class SearchDetails extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount = () => {
		let movieArray = this.props.movies
	}





	render() {
		return (
			<div>
				search details
			</div>
		)
	}
}


export default withRouter(SearchDetails);