import React, { Component } from 'react';
import '../../assets/bower_components/jquery.steps/js/jquery.steps.js';
import '../../assets/bower_components/jquery.cookie/js/jquery.cookie.js';
import '../../assets/bower_components/modernizr/js/css-scrollbars.js';
import '../../assets/bower_components/jquery-slimscroll/js/jquery.slimscroll.js';
import '../../assets/pages/waves/js/waves.min.js';
import '../../assets/bower_components/jquery-validation/js/jquery.validate.js';
import '../../assets/pages/form-validation/validate.js';
import '../../assets/pages/forms-wizard-validation/form-wizard.js';
import '../../assets/js/pcoded.min.js';
import '../../assets/js/vertical/vertical-layout.min.js';

export class AddNewQuiz extends Component {
    render() {
        return (
            <div>
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

                                        <div className="addquestions">
                                            <div id="wizard">
                                                <section>
                                                    <form className="wizard-form" id="design-wizard">
                                                        <h3></h3>
                                                        <fieldset>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Question 1</label>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >A</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 1"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >B</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 2"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >C</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 3"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >D</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 4"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <label for="userName-2" className="block">
                                                                        *Select the answer</label>
                                                                    <select className="form-control">
                                                                        <option>A</option>
                                                                        <option>B</option>
                                                                        <option>C</option>
                                                                        <option>D</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Enter Explanation</label>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <h3></h3>
                                                        <fieldset>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Question 1</label>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >A</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 1"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >B</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 2"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >C</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 3"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >D</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 4"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <label for="userName-2" className="block">
                                                                        *Select the answer</label>
                                                                    <select className="form-control">
                                                                        <option>A</option>
                                                                        <option>B</option>
                                                                        <option>C</option>
                                                                        <option>D</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Enter Explanation</label>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <h3></h3>
                                                        <fieldset>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Question 1</label>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >A</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 1"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >B</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 2"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >C</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 3"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >D</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 4"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <label for="userName-2" className="block"
                                                                    >*Select the answer</label>
                                                                    <select className="form-control">
                                                                        <option>A</option>
                                                                        <option>B</option>
                                                                        <option>C</option>
                                                                        <option>D</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Enter Explanation</label>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <h3></h3>
                                                        <fieldset>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Question 1</label>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >A</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 1"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >B</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 2"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >C</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 3"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >D</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 4"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <label for="userName-2" className="block"
                                                                    >*Select the answer</label>
                                                                    <select className="form-control">
                                                                        <option>A</option>
                                                                        <option>B</option>
                                                                        <option>C</option>
                                                                        <option>D</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Enter Explanation</label>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <h3></h3>
                                                        <fieldset>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Question 1</label>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >A</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 1"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >B</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 2"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >C</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 3"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >D</label>
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 4"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <label for="userName-2" className="block"
                                                                    >*Select the answer</label
                                                                    >
                                                                    <select className="form-control">
                                                                        <option>A</option>
                                                                        <option>B</option>
                                                                        <option>C</option>
                                                                        <option>D</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Enter Explanation</label
                                                                    >
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <h3></h3>
                                                        <fieldset>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Question 1</label
                                                                    >
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >A</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 1"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >B</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 2"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >C</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 3"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >D</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 4"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <label for="userName-2" className="block"
                                                                    >*Select the answer</label
                                                                    >
                                                                    <select className="form-control">
                                                                        <option>A</option>
                                                                        <option>B</option>
                                                                        <option>C</option>
                                                                        <option>D</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Enter Explanation</label
                                                                    >
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <h3></h3>
                                                        <fieldset>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Question 1</label
                                                                    >
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >A</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 1"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >B</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 2"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >C</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 3"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >D</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 4"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <label for="userName-2" className="block"
                                                                    >*Select the answer</label
                                                                    >
                                                                    <select className="form-control">
                                                                        <option>A</option>
                                                                        <option>B</option>
                                                                        <option>C</option>
                                                                        <option>D</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Enter Explanation</label
                                                                    >
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <h3></h3>
                                                        <fieldset>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Question 1</label
                                                                    >
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >A</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 1"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >B</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 2"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >C</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 3"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >D</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 4"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <label for="userName-2" className="block"
                                                                    >*Select the answer</label
                                                                    >
                                                                    <select className="form-control">
                                                                        <option>A</option>
                                                                        <option>B</option>
                                                                        <option>C</option>
                                                                        <option>D</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Enter Explanation</label
                                                                    >
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <h3></h3>
                                                        <fieldset>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Question 1</label
                                                                    >
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >A</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 1"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >B</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 2"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >C</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 3"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >D</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 4"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <label for="userName-2" className="block"
                                                                    >*Select the answer</label
                                                                    >
                                                                    <select className="form-control">
                                                                        <option>A</option>
                                                                        <option>B</option>
                                                                        <option>C</option>
                                                                        <option>D</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Enter Explanation</label
                                                                    >
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <h3></h3>
                                                        <fieldset>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Question 1</label
                                                                    >
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >A</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 1"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >B</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 2"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >C</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 3"
                                                                    />
                                                                </div>
                                                                <div className="input-group col-sm-6">
                                                                    <span className="input-group-prepend">
                                                                        <label className="input-group-text"
                                                                        >D</label
                                                                        >
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        required
                                                                        placeholder="Option 4"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-6">
                                                                    <label for="userName-2" className="block"
                                                                    >*Select the answer</label
                                                                    >
                                                                    <select className="form-control">
                                                                        <option>A</option>
                                                                        <option>B</option>
                                                                        <option>C</option>
                                                                        <option>D</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <div className="col-sm-12">
                                                                    <label for="userName-2" className="block"
                                                                    >Enter Explanation</label
                                                                    >
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <textarea
                                                                        id="userName-2c"
                                                                        name="userName"
                                                                        required
                                                                        className="required form-control"
                                                                        style="height: 100px;"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                    </form>
                                                </section>
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
