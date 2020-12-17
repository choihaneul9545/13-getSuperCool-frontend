import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./index.css";
import "./Styles/reset.scss";
import "./Styles/common.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
