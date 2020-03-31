import {
    LOGIN_PASSWORD_CHANGED,
    LOGIN_EMAIL_CHANGED,
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS
} from "../constants/actionTypes";

export const loginEmailChanged = payload => ({
    type: LOGIN_EMAIL_CHANGED,
    payload
});

export const loginPasswordChanged = payload => ({
    type: LOGIN_PASSWORD_CHANGED,
    payload
});

export const loginRequest = payload => ({
    type: LOGIN_REQUEST,
    payload
});

export const loginRequestSuccess = payload => ({
    type: LOGIN_REQUEST_SUCCESS,
    payload
})