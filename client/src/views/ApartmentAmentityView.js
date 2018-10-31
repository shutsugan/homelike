import React from 'react';
import AmentityLabel from './AmentityLabel';

const ApartmentAmentityView = ({apartment, limit = 3}) => {
  return (
    <div className="f9YmKwMaSOdtYnk_Qz-iT">
				<div className="dVjtBg_ihJ63cZB8GwE0g text-truncate">
          {
            apartment.amenities
              .filter((item, index) => (index < limit) ? true : false)
              .map((item, index) => <AmentityLabel item={item} key={index} />)
          }
        </div>
    </div>
  )
}

export default ApartmentAmentityView;
