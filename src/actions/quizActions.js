import { FETCH_QUIZ_LIST, FETCH_QUIZ_CATEGORY_LIST } from "../constants/actionTypes";
import callAPI from '../services/callApi';
import { BASE_URL } from '../services/baseUrl';

export const fetchQuizListDetails = (
  skip = 0,
  limit = 0
) => ({
  type: FETCH_QUIZ_LIST,
  payload: callAPI(`${BASE_URL}/admin/quiz/${skip}/${limit}`, 'GET'),
});

export const fetchQuizCategories = () => ({
  type: FETCH_QUIZ_CATEGORY_LIST,
  payload: callAPI(`${BASE_URL}/admin/quiz-category`, 'GET')
})