import {  takeEvery,  put } from "redux-saga/effects";
import * as $ from "../action";

export function* handler() {
  yield takeEvery($.INFO, FUNC_INFO);

}

function* FUNC_INFO(action) {

    yield put({
      type: $.INFO_REQUEST_SUCCESS,
      payload: action.payload,
    });

  }
