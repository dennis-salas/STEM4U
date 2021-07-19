import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavaBarStem from '../Components/NavaBarStem';
import App from '../Containers/App';
import { Publications } from '../Containers/Publications';
import { Services } from '../Containers/Services'
import { Stories } from '../Containers/Stories';
import { Contact } from '../Containers/Contact';

const AppRouter = () => {
    return (
        <Router>
            <NavaBarStem />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Publications" component={Publications} />
                <Route exact path="/Services" component={Services} />
                <Route exact path="/Stories" component={Stories} />
                <Route exact path="/Contact" component={Contact} />
            </Switch>
        </Router>
    )
}

export default AppRouter
