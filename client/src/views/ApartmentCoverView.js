import React from 'react';

import ApartmentPriceView from './ApartmentPriceView';
import ApartmentLocationView from './ApartmentLocationView';

const ApartmentCoverView = ({price, image, location, loc}) => (
	<div className="listing-image">
		<div 
			className="media-cover" 
			style={{
				backgroundImage: `url(${image})`, 
				backgroundPosition: 'center', 
				backgroundSize: 'cover'
			}}
		></div>
		<ApartmentPriceView price={price} />
		{loc ? <ApartmentLocationView location={location} /> : ''}
	</div>
);

export default ApartmentCoverView;