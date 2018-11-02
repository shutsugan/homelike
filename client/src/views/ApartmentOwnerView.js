import React from 'react';
import ApartmentOwnerPartView from './ApartmentOwnerPartView';

const ApartmentOwnerView = ({owner}) => {
	const email = owner.email;
	const name = `${owner.profile.firstName} ${owner.profile.lastName}`;
	const role = owner.profile.role;
	
	return (
		<div>
			<ApartmentOwnerPartView label="Email" value={email} />
			<ApartmentOwnerPartView label="Name" value={name} />
			<ApartmentOwnerPartView label="Role" value={role} />
		</div>
	)
};

export default ApartmentOwnerView;