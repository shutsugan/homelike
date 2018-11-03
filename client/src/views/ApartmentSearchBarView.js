import React, {Component} from 'react';

const mergeObjects = (items, container, key) => {
    items.forEach(item => container[key].push(item[key]));
};

const mergeArrays = (arr) => [...new Set([].concat(...arr))];

const getApartmentDetails = (items) => {
    const container = {
        size: [],
        price: [],
        amenities: [],
        details: [],
        services: []
    };

    Object.keys(container).map(key => mergeObjects(items, container, key));

    return container;
}

class ApartmentSearchBarView extends Component {
    constructor(props) {
        super(props);

        const items = props.apartments.items;
        const container = getApartmentDetails(items);
        const {size, price, amenities, details, services} = container;

        this.state = {
            apartments: null,
            size: size,
            price: price,
            amenities: mergeArrays(amenities),
            details: details,
            services: mergeArrays(services)
        }
    }

    render() {
        return '';
    }
}

export default ApartmentSearchBarView;