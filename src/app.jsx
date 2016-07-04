import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Game from './components/Game';
import Main from './components/Main';

const router = (
    <Router history={browserHistory}>
        <Route path='/'>
            <IndexRoute component={Main}/>
            <Route path='game' component={Game}/>
        </Route>
    </Router>
)

render(router, document.getElementById('container'));