import * as $ from "../action/index";

const STATE = {
  INFO: [],
  INFO_LOADER: false,
  INFO_STATUS: false,
};

const reducer = function (state = STATE, action) {
  switch (action.type) {
    case $.INFO_REQUEST:
      return { ...state, INFO_LOADER: true, INFO_STATUS: 1 };
    case $.INFO_REQUEST_SUCCESS:
      return {
        ...state,
        INFO_LOADER: true,
        INFO_STATUS: 2,
        INFO: action.payload,
      };

    case $.INFO_REQUEST_FAILURE:
      return {
        ...state,
        INFO_LOADER: true,
        INFO_STATUS: 3,
      };

    default:
      return state;
  }
};

export default reducer;
