import React from 'react';
import ApartmentPriceView from './ApartmentPriceView';

const ApartmentCoverView = ({price, image}) => (
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
	</div>
);

export default ApartmentCoverView;