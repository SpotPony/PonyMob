import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import App from "../App";

const store = configureStore(() => {})

export default class Setup extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
