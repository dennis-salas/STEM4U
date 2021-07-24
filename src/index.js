import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style/main.css";
import AppRouter from "./Routers/AppRouter";
import { Provider } from "react-redux";
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
