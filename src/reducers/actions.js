export const REQUEST_NEXT_1 = "sp/request_next_1";
export const REQUEST_SELECT_VALUE = "sp/request_select_value";
export const REQUEST_TOGGLE_SERVICE = "sp/request_select_service";
export const REQUEST_SAVE_SELFIE = "sp/request_save_selfie";
export const GET_USER_LOCATION = "sp/get_user_location";
export const SET_USER_LOCATION = "sp/set_user_location";

// Main Request Screen
export const selectAmount = (value) => {
  return {
    type: REQUEST_SELECT_VALUE,
    amount: value
  }
}

export const toggleService = (service) => {
  return {
    type: REQUEST_TOGGLE_SERVICE,
    service: service
  }
}

export const saveSelfie = (dataUrl) => {
  return {
    type: REQUEST_SAVE_SELFIE,
    dataUrl: dataUrl
  }
}

export const getUserLocation = () => {
  return (dispatch) => {
    const {geolocation} = navigator;

    geolocation.getCurrentPosition((pos) => {
      dispatch(setUserLocation(pos));
    },
    (err) => {
      console.log(err)
    },
    {
      enableHighAccuracy: true
    });
  }
}

export const setUserLocation = (loc) => {
    return {
      type: SET_USER_LOCATION,
      userLocation: loc
    }
}
