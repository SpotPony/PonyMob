import React, { Component } from "react";
import { connect } from "react-redux";
import { saveSelfie } from "../reducers/actions"
import SelfiePreview from "../screens/SelfiePreview";

function bindActions(dispatch) {
  return {
    saveSelfie: dataUrl => dispatch(saveSelfie(dataUrl))
  }
}

const mapStateToProps = state => {
  return { }
}

export default connect(mapStateToProps, bindActions)(SelfiePreview);
