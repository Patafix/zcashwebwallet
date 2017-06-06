import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import HomePage from '../pages/HomePage';

export default function createRoutes() {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
        </Route>
    );
}
