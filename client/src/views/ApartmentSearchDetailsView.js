import React, {Component} from 'react';

import SearchInputView from './SearchInputView';

class ApartmentSearchDetailsView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bathrooms: [1, 2],
			bedrooms: [1, 2, 3],
			floor: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			rooms: [1, 2, 3, 4]
		}
	}

	handleChange = event => {
		this.setState({[event.target.name]: event.target.value});
		this.props.handleChange([event.target.name], event.target.value);
	}

	render() {
		return (
			<div className="search-bar">
				{
					[
						'bathrooms', 
						'bedrooms', 
						'floor', 
						'rooms',
					].map((key, index) => {
						return (
							<SearchInputView
								key={index}
								name={key} 
								items={this.state[key]}
								handleChange={this.handleChange}
							/>
						);
					})
				}
			</div>
		);
	}
}

export default ApartmentSearchDetailsView;