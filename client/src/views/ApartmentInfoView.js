import React from 'react';
import ApartmentAmentityView from './ApartmentAmentityView';

const ApartmentInfoView = ({apartment}) => (
	<div className="listing-details-container">
		<div className="listing-details">
			<div className="_3-hUUH6d0vGND3vUzaybD0 Lsdn2hC-tehVod76x4HzK">
				<span className="text-truncate text-first-capitalize _1NES5HH5UNUjUVK5_-d-AG">
					{apartment.title}
				</span>
			</div>
			<div className="_17om8IEGFeu2W2TBOJ6xQs Lsdn2hC-tehVod76x4HzK text-truncate">
				<span>{apartment.size} m²</span>
			</div>
			<div className="f9YmKwMaSOdtYnk_Qz-iT">
				<div className="dVjtBg_ihJ63cZB8GwE0g text-truncate">
					<ApartmentAmentityView apartment={apartment} />
				</div>
			</div>
		</div>
	</div>
);

export default ApartmentInfoView;