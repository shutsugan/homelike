import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchApartmentsList} from './../actions/apartmentsListActions';
import ApartmentTileView from "./ApartmentTileView";
import Spinner from './Spinner';

const compareLocations = (a, b) => {
	if (a.location.title < b.location.title) return -1;
	if (a.location.title > b.location.title) return 1;

	return 0;
}

class HomeView extends Component {
  componentDidMount() {
    this.props.fetchApartmentsList();
  }

  render() {
		const {apartmentsList} = this.props;
    if (!Object.keys(apartmentsList).length) return <Spinner />

    return (
      <div className="container-list container-lg clearfix">
        <div className="col-12 float-left">
          <div className="view-apartment-list">
            {
							apartmentsList.items
							.sort(compareLocations)
                .map((item, index) => {
									return (
										<ApartmentTileView 
											key={index} 
											apartment={item} 
											loc={true} 
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

export default connect(mapStateToProps, {fetchApartmentsList})(HomeView)
