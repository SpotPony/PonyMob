import React, { Component } from "react";
import { connect } from "react-redux";
import { selectAmount } from "../reducers/actions";
import DenomPanel from "../components/DenomPanel";

function bindActions(dispatch) {
  return {
    selectAmount: amount => dispatch(selectAmount(amount))
  }
}

const mapStateToProps = state => {
  return {
    reqAmount: state.reqAmount
  }
}

export default connect(mapStateToProps, bindActions)(DenomPanel);
