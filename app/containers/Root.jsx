import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createRoutes from './Routes';
import PropTypes from 'prop-types';

const routes = createRoutes();

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
          <Router history={history} routes={routes} key={Math.random()}/>
      </Provider>
    );
  }
}
