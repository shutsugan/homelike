import React from 'react';

import ApartmentCoverView from './ApartmentCoverView';
import ApartmentInfoView from './ApartmentInfoView';

const ApartmentCardView = ({apartment, image, owner}) => (
	<div className="_3im4pDXrDfzNRT2AlvLfD6">
		<ApartmentCoverView image={image} price={apartment.price} />
		<ApartmentInfoView apartment={apartment} owner={owner} />
	</div>
);

export default ApartmentCardView;