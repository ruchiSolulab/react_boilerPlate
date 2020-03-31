import React, { Component } from 'react';
import PropTypes from 'prop-types';
import appLogo from "../assets/images/logo.png";
import '../assets/css/style';
import '../assets/css/widget';
import '../assets/css/pages';
import '../assets/css/custom';
import '../assets/icon/icofont/css/icofont';
import '../assets/icon/feather/css/feather';
import '../assets/icon/themify-icons/themify-icons';
import '../assets/pages/waves/css/waves.min';
import '../assets/css/font-awesome-n.min';

import '../assets/bower_components/jquery/js/jquery.min.js'
import '../assets/bower_components/jquery-ui/js/jquery-ui.min.js'
// import '../assets/bower_components/popper.js/js/popper.min.js';
// import '../assets/bower_components/bootstrap/js/bootstrap.min.js'
import '../assets/pages/waves/js/waves.min.js'
import '../assets/js/pcoded.min.js';
import '../assets/js/vertical/vertical-layout.min.js';
import '../assets/pages/dashboard/crm-dashboard.min.js';
import '../assets/js/script.min.js';
import '../assets/bower_components/jquery-slimscroll/js/jquery.slimscroll.js'

class MainLayout extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            showDropdown: false
        }
    }

    toggleDropdown = () => {
        const { showDropdown } = this.state;
        this.setState({ showDropdown: !showDropdown })
    }

    render() {
        const { showDropdown } = this.state;
        return (
            <div>

                <div id="pcoded" className="pcoded">
                    <div className="pcoded-overlay-box"></div>
                    <div className="pcoded-container navbar-wrapper">

                        <nav className="navbar header-navbar pcoded-header" style={{ padding: 0 }}>
                            <div className="navbar-wrapper">
                                <div className="navbar-logo">
                                    <a href="index.html">
                                        <img className="img-fluid" src={appLogo} alt="Theme-Logo" />
                                    </a>
                                    <a className="mobile-menu" id="mobile-collapse" href="#!">
                                        <i className="feather icon-menu icon-toggle-right"></i>
                                    </a>
                                    <a className="mobile-options waves-effect waves-light">
                                        <i className="feather icon-more-horizontal"></i>
                                    </a>
                                </div>
                                <div className="navbar-container container-fluid" style={{ display: 'block' }}>
                                    <ul className="nav-left">
                                        <li className="header-search">
                                            <div className="main-search morphsearch-search">
                                                <div className="input-group">
                                                    <span className="input-group-prepend search-close">
                                                        <i className="feather icon-x input-group-text"></i>
                                                    </span>
                                                    <input type="text" className="form-control" placeholder="Enter Keyword" />
                                                    <span className="input-group-append search-btn">
                                                        <i className="feather icon-search input-group-text"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="nav-right">
                                        <li className="header-notification">
                                            <div className="dropdown-primary dropdown">
                                                <div className="dropdown-toggle" data-toggle="dropdown">
                                                    <i className="feather icon-bell"></i>
                                                    <span className="badge bg-c-red">5</span>
                                                </div>
                                                <ul className="show-notification notification-view dropdown-menu"
                                                    data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                    <li>
                                                        <h6>Notifications</h6>
                                                        <label className="label label-danger">New</label>
                                                    </li>
                                                    <li>
                                                        <div className="media">
                                                            <img className="img-radius" src="files/assets/images/avatar-4.jpg"
                                                                alt="Generic placeholder image" />
                                                            <div className="media-body">
                                                                <h5 className="notification-user">John Doe</h5>
                                                                <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer
                                            elit.</p>
                                                                <span className="notification-time">30 minutes ago</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="media">
                                                            <img className="img-radius" src="files/assets/images/avatar-3.jpg"
                                                                alt="Generic placeholder image" />
                                                            <div className="media-body">
                                                                <h5 className="notification-user">Joseph William</h5>
                                                                <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer
                                            elit.</p>
                                                                <span className="notification-time">30 minutes ago</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="media">
                                                            <img className="img-radius" src="files/assets/images/avatar-4.jpg"
                                                                alt="Generic placeholder image" />
                                                            <div className="media-body">
                                                                <h5 className="notification-user">Sara Soudein</h5>
                                                                <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer
                                            elit.</p>
                                                                <span className="notification-time">30 minutes ago</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="user-profile header-notification">
                                            <div className="dropdown-primary dropdown">
                                                <div className="dropdown-toggle" data-toggle="dropdown">
                                                    <img src="../assets/images/avatar-3.jpg" className="img-radius" />
                                                    <span>John Doe</span>
                                                    <i className="feather icon-chevron-down" onClick={() => this.toggleDropdown()}></i>
                                                    {
                                                        showDropdown && <ul class="show-notification profile-notification dropdown-menu show" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                            <li>
                                                                <a href="myprofile.html">
                                                                    <i class="feather icon-user"></i> Profile
                                            </a>
                                                            </li>
                                                            <li>
                                                                <a href="signin.html">
                                                                    <i class="feather icon-log-out"></i> Logout
                                            </a>
                                                            </li>
                                                        </ul>
                                                    }

                                                    {/* <i className="feather icon-user"></i> */}
                                                </div>
                                                <ul className="show-notification profile-notification dropdown-menu"
                                                    data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                    <li>
                                                        <a href="#!">
                                                            <i className="feather icon-settings"></i> Settings
                                </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="feather icon-user"></i> Profile
                                </a>
                                                    </li>
                                                    <li>
                                                        <a href="email-inbox.html">
                                                            <i className="feather icon-mail"></i> My Messages
                                </a>
                                                    </li>
                                                    <li>
                                                        <a href="auth-sign-in-social.html">
                                                            <i className="feather icon-log-out"></i> Logout
                                </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div className="pcoded-main-container">
                            <div className="pcoded-wrapper">

                                <nav className="pcoded-navbar">
                                    <div className="nav-list">
                                        <div className="pcoded-inner-navbar main-menu">
                                            {/* <!-- <div className="pcoded-navigation-label">Navigation</div> --> */}
                                            <ul className="pcoded-item pcoded-left-item">
                                                <li className="active pcoded-trigger">
                                                    <a href="/" className="waves-effect waves-dark">
                                                        <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                                        <span className="pcoded-mtext">Dashboard</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="/customer" className="waves-effect waves-dark">
                                                        <span className="pcoded-micon"><i className="feather icon-users"></i></span>
                                                        <span className="pcoded-mtext">Customer</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="/quiz" className="waves-effect waves-dark">
                                                        <span className="pcoded-micon">
                                                            <i className="feather icon-help-circle"></i>
                                                        </span>
                                                        <span className="pcoded-mtext">Quiz</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="/user-management" className="waves-effect waves-dark">
                                                        <span className="pcoded-micon">
                                                            <i className="feather icon-command"></i>
                                                        </span>
                                                        <span className="pcoded-mtext">User Management</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="/settings" className="waves-effect waves-dark">
                                                        <span className="pcoded-micon">
                                                            <i className="feather icon-settings"></i>
                                                        </span>
                                                        <span className="pcoded-mtext">Account & Settings</span>
                                                    </a>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </nav>

                                {/* start */}
                                {this.props.children}
                                {/* end */}
                                <div id="styleSelector">
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}


// dashboard.propTypes = {

// };


export default MainLayout;
