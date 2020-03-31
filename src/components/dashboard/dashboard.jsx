import React, { Component } from 'react';
import { fetchQuizListDetails } from '../../actions/quizActions';
import { connect } from 'react-redux';

export class Dashboard extends Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {
        // const { fetchQuizListDetails } = this.props;
        // fetchQuizListDetails();
    }

    render() {
        return (
            <div className="pcoded-content">

                <div className="page-header card" style={{ border: 'none' }}>
                    <div className="row align-items-end">
                        <div className="col-lg-12">
                            <div className="page-header-title">
                                <i className="feather icon-home bg-c-blue"></i>
                                <div className="d-inline">
                                    <h5>Dashboard</h5>
                                    {/* <!-- <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span> --> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="pcoded-inner-content">
                    <div className="main-body">
                        <div className="page-wrapper">
                            <div className="page-body">

                                <div className="row">

                                    <div className="col-xl-4 col-md-4">
                                        <div className="card prod-p-card">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <h6 className="m-b-5">Total User</h6>
                                                        <h3 className="m-b-0 f-w-700">236</h3>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="far fa-user card-red f-18"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-4">
                                        <div className="card prod-p-card">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <h6 className="m-b-5">Total Reports</h6>
                                                        <h3 className="m-b-0 f-w-700">321</h3>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="far fa-file-alt card-blue f-18"></i>
                                                    </div>
                                                </div>
                                                {/* <!-- <p className="m-b-0"><span
                                                    className="label label-primary m-r-10">+12%</span>From
                                                Previous Month</p> --> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-4">
                                        <div className="card prod-p-card ">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <h6 className="m-b-5">Total Quizzes</h6>
                                                        <h3 className="m-b-0 f-w-700">658</h3>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-question card-green f-18"></i>
                                                    </div>
                                                </div>
                                                {/* <!-- <p className="m-b-0"><span
                                                    className="label label-success m-r-10">+52%</span>From
                                                Previous Month</p> --> */}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-xl-12 col-md-12">
                                        <div className="card latest-update-card">
                                            <div className="card-header">
                                                <h5>Recent Activity 1</h5>
                                                <div className="card-header-right">
                                                    <div className="text-right">
                                                        <a href="#!" className=" b-b-primary text-primary">View all
                                                        Activity</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-block">
                                                <div className="latest-update-box">
                                                    <div className="row p-t-20 p-b-30">
                                                        <div className="col-auto text-right update-meta">
                                                            <i className="feather icon-clock bg-c-red update-icon"></i>
                                                        </div>
                                                        <div className="col">
                                                            <h6>5 mins ago</h6>
                                                            <p className="text-muted m-b-0">The trip was an amazing and a life changing experience!!</p>
                                                        </div>
                                                    </div>
                                                    <div className="row p-b-30">
                                                        <div className="col-auto text-right update-meta">
                                                            <i className="feather icon-clock bg-c-red update-icon"></i>
                                                        </div>
                                                        <div className="col">
                                                            <h6>15 mins ago</h6>
                                                            <p className="text-muted m-b-0">Free courses for all our
                                                                customers at A1 Conference Room - 9:00 am
                                                            tomorrow!</p>
                                                        </div>
                                                    </div>
                                                    <div className="row p-b-30">
                                                        <div className="col-auto text-right update-meta">
                                                            <i className="feather icon-clock bg-c-red update-icon"></i>
                                                        </div>
                                                        <div className="col">
                                                            <h6>25 mins ago</h6>
                                                            <p className="text-muted m-b-0">Happy Hour! Free drinks
                                                            at <span> <a href="#!"
                                                                    className="text-c-blue">Cafe-Bar all </a>
                                                                </span>day long!</p>
                                                        </div>
                                                    </div>
                                                    <div className="row p-b-10">
                                                        <div className="col-auto text-right update-meta">
                                                            <i className="feather icon-clock bg-c-red update-icon"></i>
                                                        </div>
                                                        <div className="col">
                                                            <h6>30 mins ago</h6>
                                                            <p className="text-muted m-b-0">Free courses for all our
                                                                customers at A1 Conference Room - 9:00 am
                                                            tomorrow!</p>
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
            </div>

        );
    }
}

const mapStateToProps = state => ({
    ...state
})


const mapDispatchToProps = dispatch => ({
    fetchQuizListDetails: (skip, limit) => {
        dispatch(fetchQuizListDetails(skip, limit));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

