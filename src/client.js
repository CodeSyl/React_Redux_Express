import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Routes from './containers/Routes/Routes'
import store from './store'

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router routes={Routes} history={hashHistory}></Router>
    </Provider>
    , app); 