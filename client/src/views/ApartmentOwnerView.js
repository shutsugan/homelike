import React from 'react';

const ApartmentOwnerView = ({email}) => {
	return (
		<div className="owner">
			<span className="owner-label">Owner email </span>
			<span className="owner-email">{email}</span>
		</div>
	);
}

export default ApartmentOwnerView;