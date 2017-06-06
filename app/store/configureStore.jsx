import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {browserHistory} from 'react-router';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
import DevTools from '../components/DevTools';

const reducer = combineReducers({...rootReducer, routing: routerReducer});

const logger = createLogger({
	collapsed: true
});

const newStore = (initialState = {}) => {
	const createStoreWithMiddleware = compose(
		applyMiddleware(thunk, routerMiddleware(browserHistory), logger),
		DevTools.instrument()
	)(createStore);

	const store = createStoreWithMiddleware(reducer, initialState);

	if (module.hot) {
		module.hot.accept(rootReducer, () => {
			store.replaceReducer(reducer);
		});
	}


	return store;
};

export default newStore;
