//import { combineReducers } from "redux";
import * as actions from "./actions";
import _ from "lodash";

const initialState = {
  reqAmount: 0,
  reqLoc: null,
  reqServices: [],
  reqSelfieSaved: false,
}

export default function(state=initialState, action) {
  switch(action.type) {
    case actions.REQUEST_SELECT_VALUE:
      return {
        ...state,
        reqAmount: action.amount
      }
      break;

    case actions.REQUEST_TOGGLE_SERVICE:
      let fn = _.includes(state.reqServices, action.service) ?
        _.pull :
        _.concat;

      return {
        ...state,
        reqServices: _.compact(fn(state.reqServices, action.service))
      }
      break;

    case actions.REQUEST_SAVE_SELFIE:
      return {
        ...state,
        reqSelfieSaved: true
      }
    default:
      return state;
  }
}
