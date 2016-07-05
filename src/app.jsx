import React from 'react';
import {render} from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Router, Route, IndexRoute, Redirect, browserHistory} from 'react-router';

import Game from './components/Game';
import Main from './components/Main';

injectTapEventPlugin();

const app = (
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path='/MineSweeper/'>
                <IndexRoute component={Main}/>
                <Route path='game' component={Game}/>
                <Route path='setup' component={Game}/>
                <Route path='about' component={Game}/>
            </Route>
            <Redirect from="/*" to="/MineSweeper/"/>
        </Router>
    </MuiThemeProvider>
)

render(app, document.getElementById('container'));