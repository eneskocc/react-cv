import { takeLatest, takeEvery, call, put, select } from "redux-saga/effects";
import * as $ from "../action";

import axios from "axios";
export function* handler() {
  yield takeEvery($.ADD_NAME, FUNC_ADD_NAME);

}

function* FUNC_ADD_NAME(action) {

    yield put({
      type: $.ADD_NAME_REQUEST_SUCCESS,
      payload: action.payload,
    });

  }
