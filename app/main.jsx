import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import {hashHistory} from 'react-router';
import {AppContainer} from 'react-hot-loader';
import {syncHistoryWithStore} from 'react-router-redux';
import "bootstrap";
import './styles/main.less';
import createStore from './store/configureStore';

let store = createStore();



function renderApp(RootComponent) {
	const target = document.getElementById('react');
	if (target) {
		ReactDOM.render(
			<AppContainer>
				<RootComponent store={store} history={syncHistoryWithStore(hashHistory, store)}/>
			</AppContainer>,
			target
		);
	}
}

renderApp(Root);

export function getStore() {
	return store;
}

if (module.hot) {
	module.hot.accept(
		Root,
		() => renderApp(Root)
	);
}
