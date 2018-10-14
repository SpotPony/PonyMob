import React, { Component } from "react";
import { connect } from "react-redux";
import MainRequest from "../screens/MainRequest";
import {getUserLocation} from "../reducers/actions";

function bindActions(dispatch) {
  return {
    getUserLocation: () => dispatch(getUserLocation())
  }
}

const mapStateToProps = state => {
  return {
    reqAmount: state.reqAmount,
    reqServices: state.reqServices,
    reqSelfieSaved: state.reqSelfieSaved,
    userLocation: state.userLocation,
  }
}

export default connect(mapStateToProps, bindActions)(MainRequest);
