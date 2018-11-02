import gql from "graphql-tag";

import {FETCH_APARTMENTS_LIST} from "./types";
import client from './../ApolloClient'

export const fetchApartmentsList = _ => dispatch => {
  client.query({
    query: gql`
    {
      apartments(active: true) {
        items {
          _id
          owner {
            _id
            email
            profile {
              firstName
              lastName
              role
            }
          } 
          title
          location {
            title
          }
          size
          price
          amenities
          images
        }
      }
    }`
  })
  .then(apartments => dispatch({
    type: FETCH_APARTMENTS_LIST,
    payload: apartments.data
  }));
};


