import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import EmotionalAssistance from '../Containers/PagesPrivate/EmotionalAssistance';
import HomePrivate from '../Containers/PagesPrivate/HomePrivate';
import Tips from '../Containers/PagesPrivate/Tips';
import Training from '../Containers/PagesPrivate/Training';

export const AuthPrivateRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/Home"
                            component={HomePrivate}
                        />

                        <Route
                            exact
                            path="/Tips"
                            component={Tips}
                        />

                        <Route
                            exact
                            path="/Training"
                            component={Training}
                        />
                        <Route
                            exact
                            path="/EmotionalAssistance"
                            component={EmotionalAssistance}
                        />

                        <Redirect to="/Home" />
                    </Switch>
                </BrowserRouter>
            </div>

        </div>
    )
}