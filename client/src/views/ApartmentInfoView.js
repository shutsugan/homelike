import React from 'react';
import ApartmentAmentityView from './ApartmentAmentityView';
import ApartmentOwnerView from './ApartmentOwnerView';
import ApartmentDescriptionView from './ApartmentDescriptionView';

const ApartmentInfoView = ({apartment, owner}) => (
	<div className="listing-details-container">
		<div className="listing-details">
			<ApartmentDescriptionView apartment={apartment} />
			<div className="flex-row">
				<ApartmentAmentityView apartment={apartment} />
				{owner ? <ApartmentOwnerView owner={apartment.owner} /> : ''}
			</div>
		</div>
	</div>
);

export default ApartmentInfoView;