import React, { Component } from "react";
import { connect } from "react-redux";
import MainRequest from "../screens/MainRequest";

function bindActions(dispatch) {
  return {
  }
}

const mapStateToProps = state => {
  return {
    reqAmount: state.reqAmount
  }
}

export default connect(mapStateToProps, bindActions)(MainRequest);