import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import client from './ApolloClient';
import store from './store';

import HomeView from './views/HomeView';
import ApartmentView from "./views/ApartmentView";

const App = _ => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={HomeView}/>
          <Route
            exact
            path="/apartments/:apartmentId"
            component={ApartmentView}
          />
        </div>
      </Router>
    </Provider>
  </ApolloProvider>
);

export default App;
