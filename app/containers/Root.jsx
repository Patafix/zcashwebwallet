import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createRoutes from './Routes';

const routes = createRoutes();

export default class Root extends React.Component {

  static propTypes = {
    history: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired
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
