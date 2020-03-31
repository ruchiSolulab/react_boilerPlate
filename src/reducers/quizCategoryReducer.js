import { FETCH_QUIZ_CATEGORY_LIST } from "../constants/actionTypes";

export const INITIAL_STATE = {
  quizCategory: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_QUIZ_CATEGORY_LIST_FULFILLED':
      return {
        ...state,
        status: 'success',
        errorResponse: null,
        quizCategoryList: action.payload.data,
      };
    // newState = {
    //   ...state,
    //   // ...INITIAL_STATE,
    //   status: 'success',
    //   errorResponse: null,
    //   quizCategoryList: action.payload.data,
    // };
    // break;

    case 'FETCH_QUIZ_CATEGORY_LIST_PENDING':
      return {
        ...state,
        status: 'pending',
        lastList: true,
      };


    case 'FETCH_QUIZ_CATEGORY_LIST_REJECTED':
      return {
        ...state,
        status: 'fail',
        errorResponse: action.payload.data,
      };
    default:
      return state;
  }

}
