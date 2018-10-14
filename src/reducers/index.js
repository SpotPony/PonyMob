//import { combineReducers } from "redux";
import * as actions from "./actions";
import _ from "lodash";


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
    case actions.SET_USER_LOCATION:
      return {
        ...state,
        userLocation: {
          longitude: action.userLocation.coords.longitude,
          latitude: action.userLocation.coords.latitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }
      }
    default:
      return state;
  }
}
