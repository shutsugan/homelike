import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchApartmentsList} from './../actions/apartmentsListActions';
import ApartmentTileView from './ApartmentTileView';
import ApartmentNavView from './ApartmentNavView';
import ApartmentSearchBarView from './ApartmentSearchBarView';
import ApartmentSearchDetailsView from './ApartmentSearchDetailsView';
import Spinner from './Spinner';

class SearchView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apartments: [],
    };
  }

  componentDidMount() {
    this.props.fetchApartmentsList();
  }

  handleChange = (name, value) => {
    this.setState({[name]: value}, _ => this.setApartments());
  }

  setApartments = _ => {
    const {apartmentsList} = this.props;
    const search_apartments = apartmentsList.items
      .filter(apartment => this.compareApartmentInfo(apartment));

    this.setState({apartments: search_apartments});
  }

  compareApartmentInfo = apartment => {
    const keys = this.getOriginalKeys();
    const populated_keys = this.getPopulatedKeys(keys);

    return this.compare(apartment, populated_keys, keys);
  }

  compare = (apartment, populated_keys, keys) => {
    let compare_flag = true;
    keys.forEach(key => {
      if (Array.isArray(apartment[key])) {
        if (!apartment[key].includes(populated_keys[key])) compare_flag = false;
      } else {
        if (key === 'location') {
          if (`${apartment[key].title}` !== populated_keys[key]) compare_flag = false;
        } else if (['bathrooms', 'bedrooms', 'floor', 'rooms'].includes(key)) {
          if (`${apartment.details[key]}` !== populated_keys[key]) compare_flag = false;
        } else {
          if (`${apartment[key]}` !== populated_keys[key]) compare_flag = false;
        }
      }
    });

    return compare_flag;
  }

  getPopulatedKeys = keys => {
    const populated_keys = {};
    keys.forEach(key => populated_keys[key] = this.state[`by_${key}`]);

   return populated_keys;
  }

  getOriginalKeys = _ => {
    const keys = Object.keys(this.state);
    keys.splice(0, 1)

    const original_keys = keys.filter(key => this.state[key] !== '')
      .map(key => key.replace('by_', ''));
    
    return original_keys;
  }

  render() {
    const {apartmentsList} = this.props;
    const list = this.state.apartments
    
    if (!Object.keys(apartmentsList).length) return <Spinner />

    return (
      <div className="container-list container-lg clearfix">
        <ApartmentNavView current="search" />
        <ApartmentSearchBarView 
          apartments={apartmentsList}
          handleChange={this.handleChange} 
        />
        <ApartmentSearchDetailsView
          apartments={apartmentsList}
          handleChange={this.handleChange} 
        />
        <div className="col-12 float-left">
          <div className="view-apartment-list">
            {
              (Object.keys(list).length)
                ? list.map((item, index) => {
                    return (
                      <ApartmentTileView 
                        key={index} 
                        apartment={item}
                      />
                    );
                  })
                : ''
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  apartmentsList: state.apartmentsList.apartments
});

export default connect(mapStateToProps, {fetchApartmentsList})(SearchView)
