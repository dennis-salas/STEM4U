import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import NavBarStem from '../Components/NavBarStem';
import { Footer } from '../Components/Footer';
import App from '../Containers/PagesPublic/App';
import { Publications } from '../Containers/PagesPublic/Publications';
import { Services } from '../Containers/PagesPublic/Services'
import { Stories } from '../Containers/PagesPublic/Stories';
import { Contact } from '../Containers/PagesPublic/Contact';
import Login from '../Components/Login'
import Register from '../Components/Register'

export const AuthRoute = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <HashRouter>
                    <NavBarStem />
                    <Switch>
                        <Route
                            exact
                            path="/App"
                            component={App}
                        />
                        <Route
                            exact
                            path="/Publications"
                            component={Publications}
                        />
                        <Route
                            exact
                            path="/Services"
                            component={Services}
                        />
                        <Route
                            exact
                            path="/Stories"
                            component={Stories}
                        />
                        <Route
                            exact
                            path="/Contact"
                            component={Contact}
                        />
                        <Route
                            exact
                            path="/login"
                            component={Login}
                        />

                        <Route
                            exact
                            path="/register"
                            component={Register}
                        />

                        <Redirect to="/App" />


                    </Switch>
                    <Footer />
                </HashRouter>
            </div>
        </div>
    )
}