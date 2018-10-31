import React from 'react';
import ApartmentCardView from './ApartmentCardView'

const ApartmentTileView = ({apartment}) => {
  let url = `/apartments/${apartment._id}`;
  let image = `http://localhost:5000/images/apartments/${apartment.images[0]}`;

  return (
    <div className="view-apartment-item">
      <div className="view-apartment-item-content">
        <a target ="_blank" href={url}>
          <ApartmentCardView apartment={apartment} image={image} />
        </a>
      </div>
    </div>
  )
};

export default ApartmentTileView;
