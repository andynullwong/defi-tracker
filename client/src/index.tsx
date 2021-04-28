import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Layout from "./components/layout/Layout";
import { store } from "./store/store";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);
