import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import Switch from "react-switch";
import LoadingBar from 'react-redux-loading-bar';
import { connect } from 'react-redux';
import { fetchQuizListDetails, fetchQuizCategories } from '../../actions/quizActions';

import './quizStyle.css';
import '../../assets/bower_components/switchery/css/switchery.min';
import '../../assets/js/vertical/vertical-layout.min.js';
import '../../assets/bower_components/switchery/js/switchery.min';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"

const productsOld = [
    { id: 1, title: "Daily Routine 1", category: "Loreum 1", created: "23-09-19", responses: 40, active: true, status: "Approved", actions: `` },
    { id: 2, title: "Daily Routine 2", category: "Loreum 2", created: "24-09-19", responses: 50, active: true, status: "Approved", actions: "" },
    { id: 3, title: "Daily Routine 3", category: "Loreum 3", created: "23-09-19", responses: 30, active: true, status: "Disapproved", actions: "" },
    { id: 4, title: "Daily Routine 4", category: "Loreum 4", created: "23-09-19", responses: 20, active: false, status: "Under Dev", actions: "" },
    { id: 5, title: "Daily Routine 5", category: "Loreum 5", created: "23-09-19", responses: 40, active: true, status: "Approved", actions: "" },
    { id: 6, title: "Daily Routine 6", category: "Loreum 6", created: "23-09-19", responses: 40, active: true, status: "Approved", actions: "" },
];

const products = [
    {
        _id: "5e15cd9c2ac69c0cf11f1e1d",
        version: 1,
        status: "UnderDevelopment",
        isActive: false,
        title: "quiz title 1",
        createdTime: "2020-01-08T12:39:56.514Z",
        categoryName: ["anatomy"],
        quizResponse: 1,
    },
    {
        _id: "5e15cdeb2ac69c0cf11f1e28",
        version: 1,
        status: "Approved",
        isActive: false,
        title: "quiz title 2",
        createdTime: "2020-01-08T12:41:15.573Z",
        categoryName: ["anatomy", "nurosystem"],
        quizResponse: 0
    }
]

const { SearchBar } = Search;

const defaultSorted = [{
    dataField: 'id',
    order: 'desc'
}];

const customTotal = (from, to, size) => {
    return (
        <span className="react-bootstrap-table-pagination-total">
            Showing {from} to {to} of {size} Results
        </span>
    );
}

const pageButtonRenderer = ({
    page,
    active,
    disable,
    title,
    onPageChange
}) => {
    return (
        <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" className="page-link">
            {page}
        </a>);
};

const options = {
    // custom: true,
    pageStartIndex: 0,
    hideSizePerPage: true,
    alwaysShowAllBtns: true,
    prePageText: 'Previous',
    nextPageText: 'Next',
    withFirstAndLast: false,
    showTotal: true,
    paginationTotalRenderer: customTotal,
    // pageButtonRenderer
    // totalSize: 20
};


export class QuizPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            quizList: []
            // quizList: this.getList();            
        }

        this.initializeQuizList();
    }

    initializeQuizList = () => {
        // dispatch(showLoading())
        const { fetchQuizListDetails } = this.props;
        this.setState({ isLoading: true });
        console.log("ruchi:" + this.state.isLoading);
        fetchQuizListDetails();
    }

    componentDidUpdate(prevProps, prevState) {
        const { quizReducer } = this.props;

        if (prevProps.quizReducer.quizData !== quizReducer.quizData && quizReducer.status === 'success') {
            let list = this.getList(quizReducer.data);
            this.setState({ isLoading: false, quizList: list });
        }
    }

    componentDidMount() {
        const { fetchQuizCategories } = this.props;
        fetchQuizCategories();
    }

    getList = () => {
        const list = [];

        products.forEach(listItem => {
            const detail =
            {
                id: listItem._id,
                title: listItem.title,
                category: this.getCategoryNames(listItem.categoryName),
                created: this.getDate(listItem.createdTime),
                responses: listItem.quizResponse,
                active: listItem.isActive,
                status: listItem.status,
                actions: ``,
            }
            list.push(detail);
        });
        return list;
    }

    getDate = (dateString) => {
        const date = dateString ? new Date(dateString) : new Date();
        return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    }

    getCategoryNames = (items) => {
        let categoryNames = '';
        if (items.length > 1) {
            items.forEach(item => categoryNames += `${item} ,`);
            return categoryNames;
        } else {
            return items[0];
        }

    }

    redirectToDetail = () => {
        confirm("Are you sure you want to active quiz?")
    }

    rankFormatter = (cell, row, rowIndex, formatExtraData) => {
        return (
            <span className="waves-effect waves-dark pcoded-micon" onClick={() => this.redirectToDetail()} >
                <i className="feather icon-edit-2"></i></span>
        );
    }

    switchComponent = (cell, row, rowIndex, formatExtraData) => {
        return (<span>
            <Switch
                onChange={this.handleChange}
                checked={cell || false}
                uncheckedIcon={false}
                checkedIcon={false}
            />
        </span>)
    }

    onRowClick = (row) => {
        alert(`clicked on row with index: ${row}`);
    }

    rowStyleFormat = (row, rowIdx) => {
        return { backgroundColor: rowIdx % 2 === 0 ? 'red' : 'blue' };
    }

    render() {
        const columns = [
            {
                dataField: 'title',
                text: 'Quiz Title',
                sort: true,
            }, {
                dataField: 'category',
                text: 'Category',
                sort: true,
            },
            {
                dataField: 'created',
                text: 'Published on',
                sort: true,
            },
            {
                dataField: 'responses',
                text: 'Responses',
                sort: true,
            },
            {
                dataField: 'active',
                text: 'Active/Inactive',
                sort: true,
                formatter: this.switchComponent
            },
            {
                dataField: 'status',
                text: 'Status',
                sort: true
            },
            {
                dataField: 'actions',
                text: 'Actions',
                sort: true,
                formatter: this.rankFormatter,
            },
        ];

        const tableOptions = {
            onRowClick: this.onRowClick
        };

        const { quizList, isLoading } = this.state;


        return (


            <div className="pcoded-content">
                <LoadingBar
                    updateTime={100}
                    maxProgress={95}
                />
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="page-header card" style={{ border: 'none' }}>
                            <div className="row align-items-end">
                                <div className="col-lg-4">
                                    <div className="page-header-title">
                                        <i className="feather icon-help-circle bg-c-blue"></i>
                                        <div className="d-inline">
                                            <h5>Quiz Management</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="page-header-breadcrumb">
                                        <a
                                            // href="/add-quiz"
                                            className="btn btn-primary btn-sm add-quiz-btn"
                                            style={{
                                                backgroundColor: '#db3d24',
                                                borderColor: '#db3d24',
                                                color: '#fff',
                                                cursor: 'pointer',
                                                marginRight: '10px'
                                            }}
                                            onClick={() => redirectTo('/add-quiz')}
                                        >
                                            Add New Quiz</a>
                                        <a
                                            href="/quiz-category"
                                            className="btn btn-primary btn-sm"
                                            style={{
                                                backgroundColor: '#db3d24',
                                                borderColor: '#db3d24',
                                                color: '#fff',
                                                cursor: 'pointer'
                                            }}
                                        // onClick={() => redirectTo('/quiz-category')}
                                        >
                                            Edit Quiz Category</a>
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
                                                <div className="dt-responsive table-responsive">
                                                    {/* <div className="col-xs-12 col-sm-12 col-sm-12 col-md-6" style={{ float: 'left' }}>
                                                        <div className="dataTables_length" id="DataTables_Table_0_length">
                                                            <label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control input-sm">
                                                                <option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option>
                                                            </select> entries</label>
                                                        </div>
                                                    </div> */}

                                                    {/* <div className="col-xs-12 col-sm-12 col-md-6" style={{float:'left'}}>
                                                        <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                                            <label>Search:
                                                            </label>
                                                        </div>
                                                    </div> */}
                                                    {quizList && <ToolkitProvider
                                                        bootstrap4
                                                        keyField='id'
                                                        data={quizList}
                                                        columns={columns}
                                                        defaultSorted={defaultSorted}
                                                        noDataIndication="Table is Empty"
                                                        tabIndexCell
                                                        search
                                                    >
                                                        {
                                                            props => (
                                                                <div>
                                                                    <div className="col-xs-12 col-sm-12 col-md-6" style={{ float: 'left' }}>
                                                                        <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                                                            <label>Search: </label>
                                                                            <SearchBar {...props.searchProps} />
                                                                        </div>
                                                                    </div>

                                                                    <PaginationProvider
                                                                        pagination={paginationFactory(options)}
                                                                    >
                                                                        {
                                                                            ({
                                                                                paginationProps,
                                                                                paginationTableProps
                                                                            }) => (
                                                                                    <div>
                                                                                        <div className="col-xs-12 col-sm-12 col-sm-12 col-md-6" style={{ float: 'left' }}>
                                                                                            <div className="dataTables_length" id="DataTables_Table_0_length">
                                                                                                <label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control input-sm">
                                                                                                    <SizePerPageDropdownStandalone
                                                                                                        {...paginationProps}
                                                                                                    />
                                                                                                </select> entries</label>
                                                                                            </div>
                                                                                        </div>

                                                                                        <BootstrapTable
                                                                                            options={tableOptions}
                                                                                            striped
                                                                                            trStyle={this.rowStyleFormat}
                                                                                            {...props.baseProps}
                                                                                            {...paginationTableProps}
                                                                                        />
                                                                                    </div>
                                                                                )
                                                                        }
                                                                    </PaginationProvider>
                                                                </div>
                                                            )
                                                        }
                                                    </ToolkitProvider>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="styleSelector">
                    </div>

                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    quizReducer: state.quizReducer,
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

