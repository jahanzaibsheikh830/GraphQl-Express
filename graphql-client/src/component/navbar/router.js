import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Artist from '../artist'
import Header from './header'
import Songs from '../songs'
import AllSongs from '../allSongs'
function RouterConfig() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Artist} />
                <Route path="/songs/:id" component={Songs} />
                <Route path="/allsongs" component={AllSongs} />
            </Switch>
        </Router>
    )
}

export default RouterConfig