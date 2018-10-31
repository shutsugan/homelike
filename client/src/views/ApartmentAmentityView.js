import React from 'react';

const setApartmentAmentity = (item, index, limit) => {
  if (index < limit) {
    return (
      <span className="_1h9l4w0vvX6d56ZnJ3NLod" key={index}>
        <i></i>
        <span>{item}</span>
      </span>
    );
  }
};

const ApartmentAmentityView = ({apartment, limit = 3}) => {
  return apartment.amenities.filter((item, index) => {
    return setApartmentAmentity(item, index, limit);
  });
}

export default ApartmentAmentityView;
