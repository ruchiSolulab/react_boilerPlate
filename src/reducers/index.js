import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { loadingBarReducer } from 'react-redux-loading-bar'
import quizReducer from './quizListReducer';
import quizCategoryListReducer from './quizCategoryReducer';
// import Auth from "./auth";
// export default history =>
//     combineReducers({
//         router: connectRouter(history),
//         Auth,
//     });

const rootReducer = combineReducers({
    router: connectRouter(history),
    quizReducer,
    quizCategoryListReducer,
    loadingBar: loadingBarReducer,
})

export default rootReducer;

