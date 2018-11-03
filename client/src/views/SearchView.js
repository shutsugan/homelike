import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchApartmentsList} from './../actions/apartmentsListActions';
import ApartmentTileView from './ApartmentTileView';
import ApartmentNavView from './ApartmentNavView';
import ApartmentSearchBarView from './ApartmentSearchBarView';
import ApartmentSearchDetailsView from './ApartmentSearchDetailsView';
import Spinner from './Spinner';

class SearchView extends Component {
  componentDidMount() {
    this.props.fetchApartmentsList();
  }

  handleChange = (name, value) => {
    this.setState({[name]: value});
  }

  render() {
    const {apartmentsList} = this.props;
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
              apartmentsList.items
                .map((item, index) => {
                  return (
                    <ApartmentTileView 
                      key={index} 
                      apartment={item}
                    />
                  );
                })
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
