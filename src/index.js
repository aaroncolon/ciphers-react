import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./sass/foundation.scss";
import "./sass/styles.scss";

import { Provider } from 'react-redux';
import store from './redux/stores/store';


var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);