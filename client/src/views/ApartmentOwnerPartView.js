import React from 'react';

const ApartmentOwnerPartView = ({label, value}) => (
	<div className="owner">
		<span className="owner-label">{label} </span>
		<span className="owner-email">{value}</span>
	</div>
);

export default ApartmentOwnerPartView;

