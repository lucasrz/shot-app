import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import store, { history } from './store';
import home from './screens/home';
import details from './screens/details';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={home} />
            <Route exact path="/details/:id" component={details} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
