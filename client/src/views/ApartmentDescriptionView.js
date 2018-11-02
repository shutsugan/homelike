import React from 'react';

const ApartmentDescriptionView = ({apartment}) => (
	<div className="flex-row mr-bt-10">
		<div className="_3-hUUH6d0vGND3vUzaybD0 Lsdn2hC-tehVod76x4HzK">
			<span className="text-truncate text-first-capitalize _1NES5HH5UNUjUVK5_-d-AG">
				{apartment.title}
			</span>
		</div>
		<div className="_17om8IEGFeu2W2TBOJ6xQs Lsdn2hC-tehVod76x4HzK text-truncate">
			<span>{apartment.size} m²</span>
		</div>
	</div>
);

export default ApartmentDescriptionView;