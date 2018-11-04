import React, {Component} from 'react';

import SearchInputView from './SearchInputView';

const mergeObjects = (items, container, key) => {
	(key === 'location')
		? items.forEach(item => container[key].push(item[key].title))
		: items.forEach(item => container[key].push(item[key]))
};

const mergeArrays = (arr) => [...new Set([].concat(...arr))];

const getApartmentDetails = (items) => {
	const container = {
		size: [],
		price: [],
		amenities: [],
		services: [],
		location: []
	};

	Object.keys(container).map(key => mergeObjects(items, container, key));
	return container;
}

class ApartmentSearchBarView extends Component {
	constructor(props) {
		super(props);

		const items = props.apartments.items;
		const container = getApartmentDetails(items);
		const {
			size, 
			price, 
			amenities, 
			services, 
			location
		} = container;

		this.state = {
			size,
			price,
			location: mergeArrays(location),
			amenities: mergeArrays(amenities),
			services: mergeArrays(services)
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
						'size', 
						'price', 
						'amenities', 
						'services', 
						'location'
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

export default ApartmentSearchBarView;