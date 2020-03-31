import React from 'react';
import { connect } from 'react-redux';
import QuizPage from '../components/quiz/quizPage.jsx';
import { fetchQuizListDetails, fetchQuizCategories } from '../actions/quizActions';

const mapStateToProps = state => ({
  quizList: state.quizReducer,
  quizCategoryList: state.quizCategoryListReducer
})

const mapDispatchToProps = dispatch => ({
  fetchQuizListDetails: (skip, limit) => {
    dispatch(fetchQuizListDetails(skip, limit));
  },
  fetchQuizCategories: () => {
    dispatch(fetchQuizCategories())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
