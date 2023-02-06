import * as $ from "../action/index";

const STATE = {
  ADD_NAME: [],
  ADD_NAME_LOADER: false,
  ADD_NAME_STATUS: false,
};

const reducer = function (state = STATE, action) {
  switch (action.type) {
    case $.ADD_NAME_REQUEST:
      return { ...state, ADD_NAME_LOADER: true, ADD_NAME_STATUS: 1 };
    case $.ADD_NAME_REQUEST_SUCCESS:
      return {
        ...state,
        ADD_NAME_LOADER: true,
        ADD_NAME_STATUS: 2,
        ADD_NAME: action.payload,
      };

    case $.ADD_NAME_REQUEST_FAILURE:
      return {
        ...state,
        ADD_NAME_LOADER: true,
        ADD_NAME_STATUS: 3,
      };

    default:
      return state;
  }
};

export default reducer;
