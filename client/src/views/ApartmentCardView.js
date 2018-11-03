import React from 'react';

import ApartmentCoverView from './ApartmentCoverView';
import ApartmentInfoView from './ApartmentInfoView';

const ApartmentCardView = ({apartment, image, owner, loc}) => (
	<div className="_3im4pDXrDfzNRT2AlvLfD6">
		<ApartmentCoverView 
			image={image} 
			price={apartment.price} 
			location={apartment.location.title}
			loc={loc} 
		/>
		<ApartmentInfoView 
			apartment={apartment} 
			owner={owner}
		/>
	</div>
);

export default ApartmentCardView;