import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavBarStem from '../Components/NavBarStem';
import App from '../Containers/App';
import { Publications } from '../Containers/Publications';
import { Services } from '../Containers/Services'
import { Stories } from '../Containers/Stories';
import { Contact } from '../Containers/Contact';
import Login from '../Components/Login';
import Register from '../Components/Register';
import { Footer } from '../Components/Footer';

const AppRouter = () => {
    return (
        <Router>
            <NavBarStem />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Publications" component={Publications} />
                <Route exact path="/Services" component={Services} />
                <Route exact path="/Stories" component={Stories} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
            </Switch>
            <Footer/>
        </Router>
    )
}

export default AppRouter
