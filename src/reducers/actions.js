export const REQUEST_NEXT_1 = "request_next_1";
export const REQUEST_SELECT_VALUE = "request_select_value";
export const REQUEST_TOGGLE_SERVICE = "request_select_service";

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
