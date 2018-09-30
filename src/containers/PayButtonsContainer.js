import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleService } from "../reducers/actions"
import PayButtons from "../components/PayButtons";

function bindActions(dispatch) {
  return {
    toggleService: service => dispatch(toggleService(service))
  }
}

const mapStateToProps = state => {
  return {
    reqServices: state.reqServices
  }
}

export default connect(mapStateToProps, bindActions)(PayButtons);
