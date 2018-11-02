
export default function (Users, Locations) {

  const apartmentsResolvers = {
    Apartments: {
      owner: (apartment) => {
        return Users.find({ query: { _id: apartment.owner }})
          .then(result => result[0]);
      },
      location: (apartment) => {
        return Locations.find()
          .then(result => {
            const location =  result.filter(loc => loc._id === apartment.location)
            return location.pop();
          });
      },
      details: (apartment) => {
        return apartment.detail;
      }
    }
  };

  return apartmentsResolvers;
}
