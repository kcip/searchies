import React, { Component } from 'react'
import quotes from './quotes'
import './aside.scss';
class Aside extends Component {
	constructor(props) {
		super(props)

		this.state = {
			quotes: [],
			chosenQuote: [],
			quoteIndex: null
		}
	}

	componentDidMount = () => {
		let data = quotes
		this.setState({
			quotes: data
		})
	}

	render() {

		return (
			<div className="aside">
				<p style={{ color: 'white' }}> " If you want a happy ending, that depends, of course, on where you stop your story."</p>

				<p>- Orson Welles</p>

			</div>
		)
	}
}
export default Aside