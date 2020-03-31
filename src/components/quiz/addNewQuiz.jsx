import React, { Component } from 'react';

import '../../assets/bower_components/jquery.steps/css/jquery.steps.css';
import '../../assets/css/style.css';
import '../../assets/css/custom.css';

// import '../../';
// import '../../';
// import '../../';

import '../../assets/bower_components/jquery.steps/js/jquery.steps.js';
import '../../assets/bower_components/jquery.cookie/js/jquery.cookie.js';
// import '../../assets/bower_components/modernizr/js/css-scrollbars.js';
// import '../../assets/bower_components/modernizr/js/modernizr.js';
// import '../../assets/bower_components/jquery-slimscroll/js/jquery.slimscroll.js';
import '../../assets/pages/waves/js/waves.min.js';
import '../../assets/bower_components/jquery-validation/js/jquery.validate.js';
// import '../../assets/pages/form-validation/validate.js';
import '../../assets/pages/forms-wizard-validation/form-wizard.js';
import '../../assets/js/pcoded.min.js';
import '../../assets/js/vertical/vertical-layout.min.js';

export class AddNewQuiz extends Component {
    render() {
        const questionsArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

        return (
            <div>
                <div className="pcoded-content">
                    <div className="pcoded-main-container">
                        <div className="pcoded-wrapper">
                            <div className="page-header card" style={{ border: 'none' }}>
                                <div className="row align-items-end">
                                    <div className="col-lg-12">
                                        <div className="page-header-title">
                                            <a href="/add-quiz"><i className="ti-angle-left bg-c-blue"></i></a>
                                            <div className="d-inline">
                                                <h5>Add New Quiz</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="pcoded-inner-content">
                                <div className="main-body innerpage">
                                    <div className="page-wrapper">
                                        <div className="page-body">
                                            <div className="card">
                                                <div className="card-block">
                                                    <form className="">
                                                        <div className="row">
                                                            <div className="col-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label className="float-label">Title*</label>
                                                                    <input
                                                                        type="text"
                                                                        name="user-name"
                                                                        className="form-control"
                                                                        required=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label className="float-label">Category</label>
                                                                    <select className="form-control" required>
                                                                        <option>Select Category</option>
                                                                        <option>Select Category</option>
                                                                        <option>Select Category</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label className="float-label">Topic Name</label>
                                                                    <input
                                                                        type="text"
                                                                        name="topic-name"
                                                                        className="form-control"
                                                                        required=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label className="float-label"
                                                                    >Upload Quiz Image </label>
                                                                    <input
                                                                        type="file"
                                                                        className="form-control"
                                                                        required=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label className="float-label">Description</label>
                                                                    <textarea className="form-control"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-sm hideshow"
                                                        >
                                                            Add Questions
                                                        </button>
                                                    </form>

                                                    {/* add Question section starts here */}
                                                    <div
                                                        className="addquestions"
                                                    >
                                                        <div className="wizard">
                                                            <section>
                                                                <form className="wizard-form wizard clearfix" id="design-wizard">
                                                                    <div className="steps clearfix">
                                                                        <ul className="tablist">
                                                                            <li role="tab" class="first current" aria-disabled="false" aria-selected="true">
                                                                                <a id="design-wizard-t-0" href="#design-wizard-h-0" aria-controls="design-wizard-p-0">
                                                                                    {/* <span class="current-info audible">current step: </span> */}
                                                                                    <span class="number">1.</span>
                                                                                </a>
                                                                            </li>

                                                                            {questionsArray.map((question, index) => {
                                                                                <li role="tab" key={index} class="disabled" aria-disabled="true">
                                                                                    <a
                                                                                        id={`design-wizard-t-${index}`}
                                                                                        href={`#design-wizard-h-${index}`}
                                                                                        aria-controls={`design-wizard-p-${index}`}
                                                                                    >
                                                                                        <span class="number">{question}</span>
                                                                                    </a>
                                                                                </li>
                                                                            })}
                                                                        </ul>
                                                                    </div>
                                                                </form>
                                                            </section>

                                                        </div>
                                                    </div>
                                                    {/* add Question section ends here */}


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNewQuiz;
