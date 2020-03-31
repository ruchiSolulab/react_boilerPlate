import React, { Component } from 'react';
import PropTypes from 'prop-types';


class QuestionPreview extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <div className="pcoded-content">

                    <div className="page-header card" style={{ border: 'none' }}>
                        <div className="row align-items-end">
                            <div className="col-lg-8">
                                <div className="page-header-title">
                                    <a href="quizdetail.html"><i className="ti-angle-left bg-c-blue"></i></a>
                                    <div className="d-inline">
                                        <h5>Preview</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="page-header-breadcrumb">
                                    <a href="quizdetail.html" className="btn btn-primary btn-sm">Edit</a>
                                    <button type="button" data-modal="deletecategory" className="btn btn-primary btn-sm md-trigger">Delete Question</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pcoded-inner-content">
                        <div className="main-body">
                            <div className="page-wrapper">
                                <div className="page-body">

                                    <div className="card">
                                        <div className="card-block">
                                            <div className="questiopreview text-center">
                                                <h4 className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry?</h4>
                                                <div className="answerdemo">
                                                    <div className="form-group">
                                                        <input type="text" disabled className="form-control text-center" value="Lorem" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" disabled className="form-control text-center" value="ipsum" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" disabled className="form-control text-center" value="dolor" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" disabled className="form-control text-center" value="amet" />
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
            </div>
        );
    }
}


QuestionPreview.propTypes = {

};


export default QuestionPreview;
