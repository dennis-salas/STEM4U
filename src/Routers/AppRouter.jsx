import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../action/actions";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AuthRoute } from "./AuthRoute";
import { AuthPrivateRouter } from "./AuthPrivateRouter";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [cheking, setCheking] = useState(true);
  const [isLooggedIn, setIsLooggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLooggedIn(true);
      } else {
        setIsLooggedIn(false);
      }
      setCheking(false);
    });
  }, [dispatch, setCheking]);

  if (cheking) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden"> Loading...</span>
      </Spinner>
    );
  }
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRoute}
            isAuthenticated={isLooggedIn}
          />
          <PrivateRoute
            path="/"
            component={AuthPrivateRouter}
            isAuthenticated={isLooggedIn}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
