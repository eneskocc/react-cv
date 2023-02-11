import { takeLatest, takeEvery, call, put, select } from "redux-saga/effects";
import * as $ from "../action";

import axios from "axios";
export function* handler() {
  yield takeEvery($.INFO, FUNC_INFO);

}

function* FUNC_INFO(action) {

    yield put({
      type: $.INFO_REQUEST_SUCCESS,
      payload: action.payload,
    });

  }
