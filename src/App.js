import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import asyncComponent from './utils/asyncComponent.jsx';
import MainLayout from './components/layout.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import QuizPage from './components/quiz/quizPage.jsx'
// import QuizPage from './components/quiz/quizPage.jsx';
import QuizDetails from './components/quiz/quizDetails.jsx';
import QuizCategory from './components/quiz/quizCategory.jsx';
import AddNewQuiz from './components/quiz/addNewQuiz.jsx';
import Customer from './components/customer/customer.jsx';
import UserManagePage from './components/userManagement/userManagementPage.jsx'
import Settings from './components/settings/settingsPage.jsx';
import QuestionPreview from './components/quiz/questionPreview.jsx';
import * as serviceWorker from "./serviceWorker";
import axios from './services';
// import configureStore, { history } from "./store";
import store from './store/store.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <Provider store={store}>

                {/* <ConnectedRouter history={history}> */}
                <BrowserRouter>
                    <MainLayout>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/quiz" component={QuizPage} />
                            <Route exact path="/quizdetails" component={QuizDetails} />
                            <Route exact path="/quiz-category" component={QuizCategory} />
                            <Route exact path="/add-quiz" component={AddNewQuiz} />
                            <Route exact path="/question-preview" component={QuestionPreview} />
                            <Route exact path="/customer" component={Customer} />
                            <Route exact path="/user-management" component={UserManagePage} />
                            <Route exact path="/settings" component={Settings} />

                        </Switch>
                    </MainLayout>
                </BrowserRouter>
                {/* </ConnectedRouter> */}
            </Provider>
        </>
    );
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);
// serviceWorker.register();
export default App;
