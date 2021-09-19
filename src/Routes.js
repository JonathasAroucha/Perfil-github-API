import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/home';
import Repos from './pages/repos';
import Starred from './pages/starred';
import Followers from './pages/followers';
import Following from './pages/following';

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/repos" component={ Repos } />
            <Route path="/starred" component={ Starred } />
            <Route path="/followers" component={ Followers } />
            <Route path="/following" component={ Following } />
        </Switch>
    </BRouter>
);

export default Routes;