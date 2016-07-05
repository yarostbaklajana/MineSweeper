import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Redirect, browserHistory} from 'react-router';
import Game from './components/Game';
import Main from './components/Main';

const router = (
    <Router history={browserHistory}>
        <Route path='/MineSweeper/'>
            <IndexRoute component={Main}/>
            <Route path='game' component={Game}/>
        </Route>
        <Redirect from="/*" to="/MineSweeper/" />
    </Router>
)

render(router, document.getElementById('container'));