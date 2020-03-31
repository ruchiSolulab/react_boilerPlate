import { FETCH_QUIZ_LIST } from "../constants/actionTypes";

export const INITIAL_STATE = {
  quizData: []
};

export default (state = INITIAL_STATE, action) => {
  let newState = {};
  switch (action.type) {
    case 'FETCH_QUIZ_LIST_FULFILLED':
      return {
        ...state,
        status: 'success',
        errorResponse: null,
        quizData: action.payload.data,
      };

    case 'FETCH_QUIZ_LIST_PENDING':
      return {
        ...state,
        status: 'pending',
        lastList: true,
      };

    case 'FETCH_QUIZ_LIST_REJECTED':
      return {
        ...state,
        status: 'fail',
        errorResponse: action.payload.data,
      };

    default:
      return state;
  }
}
