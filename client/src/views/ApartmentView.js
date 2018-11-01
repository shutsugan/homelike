import React, {Component} from 'react';
import {connect} from 'react-redux';

import ApartmentCardView from './ApartmentCardView';
import Spinner from './Spinner';

import {fetchApartment} from '../actions/apartmentActions';

export class ApartmentView extends Component {
  componentWillMount() {
    const {match: { params }} = this.props;
    const {apartmentId} = params;

    this.props.fetchApartment(apartmentId);
  }

  render() {
    const { apartment } = this.props;
    if (!Object.keys(apartment).length) return <Spinner />;

    const image = `http://localhost:5000/images/apartments/${apartment.images[0]}`;

    return (
      <div className='container-fl clearfix'>
        <div className='col-12'>
          <div className='view-apartment'>
            <div className="view-apartment-item">
              <div className="view-apartment-item-content">
                <ApartmentCardView apartment={apartment} image={image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  apartment: state.apartmentItem.apartment
});

export default connect(mapStateToProps, {fetchApartment})(ApartmentView);
