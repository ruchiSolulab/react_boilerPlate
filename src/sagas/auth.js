import { all, takeEvery, call, put } from "redux-saga/effects";
// import { push } from "react-router-redux";
import * as actionTypes from "../constants/actionTypes";
import * as authAction from "../actions";

import axios from "../services";

function* loginRequest(action) {
    try {

        let response = yield axios.post("/admin/login", action.payload);
        if (response.status == 200) {
            yield put(authAction.loginRequestSuccess(response.data.data.userToken));
            localStorage.setItem("role", response.data.data.userRole);
            localStorage.setItem("userData", JSON.stringify(response.data.data));
            localStorage.setItem("userToken", response.data.data.userToken);


        }
    } catch (error) {
        console.log("TCL: function*signIn -> error", error)

    }
}



export default function* rootsaga() {
    yield takeEvery(actionTypes.LOGIN_REQUEST, loginRequest);
}
