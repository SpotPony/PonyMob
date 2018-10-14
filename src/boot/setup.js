import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import App from "../App";

const initialState = {
  reqAmount: 0,
  reqLoc: null,
  reqServices: [],
  reqSelfieSaved: false,
  userLocation: {
    latitude: 37.42,
    longitude: -122,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  }
}

const store = configureStore(initialState)

export default class Setup extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
