import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavaBarStem from '../Components/NavaBarStem';
import App from '../Containers/App';
import Publications from '../Containers/Publications';
import Services from '../Containers/Services'

const AppRouter = () => {
    return (
        <Router>
            <NavaBarStem />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Publications" component={Publications} />
                <Route exact path="/Services" component={Services} />
                <Route exact path="/Stories" component={Services} />
                <Route exact path="/Contact" component={Services} />
            </Switch>
        </Router>
    )
}

export default AppRouter
