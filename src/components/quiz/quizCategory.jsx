import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import Switch from "react-switch";
// import Modal from "react-responsive-modal";

import "bootstrap/dist/css/bootstrap.min.css";
import '../../assets/css/custom.css';
import '../../assets/pages/waves/css/waves.min.css';
import ModalA from './Modal.js';


const customTotal = (from, to, size) => {
    return (
        <span className="react-bootstrap-table-pagination-total">
            Showing {from} to {to} of {size} Results
    </span>
    );
}

const productsOld = [
    { id: 1, title: "Loreum ipsum 1", category: "Loreum 1", created: "23-09-19", status: "Approved", actions: `` },
    { id: 2, title: "Daily Routine 2", category: "Loreum 2", created: "24-09-19", status: "Approved", actions: "" },
    { id: 3, title: "Loreum ipsum 3", category: "Loreum 3", created: "23-09-19", status: "Disapproved", actions: "" },
];

const products = [
    {
        _id: "5e15cd6f2ac69c0cf11f1e1c",
        count: 1,
        isActive: true,
        createdTime: "2020-01-08T12:39:11.259Z",
        name: "nurosystem"
    },
    {
        _id: "5e15cd632ac69c0cf11f1e1b",
        count: 2,
        isActive: true,
        createdTime: "2020-01-08T12:38:59.824Z",
        name: "anatomy"
    }
]


const { SearchBar } = Search;

const defaultSorted = [{
    dataField: 'id',
    order: 'desc'
}];

const options = {
    pageStartIndex: 0,
    hideSizePerPage: true,
    alwaysShowAllBtns: true,
    prePageText: 'Previous',
    nextPageText: 'Next',
    withFirstAndLast: false,
    showTotal: true,
    paginationTotalRenderer: customTotal,
};

class QuizCategory extends Component {

    constructor(props) {
        super(props)
        // debugger;
        this.state = {
            open: false,
            quizList: this.getCategory()
        }
    }

    getCategory = () => {
        const list = [];

        products.forEach(listItem => {
            const detail =
            {
                id: listItem._id,
                category: listItem.count,
                created: this.getDate(listItem.createdTime),
                status: listItem.isActive,
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

    rankFormatter = (cell, row, rowIndex, formatExtraData) => {
        return (
            <div>
                <span
                    className="waves-effect waves-dark pcoded-micon"
                    onClick={() => this.redirectToDetail()}
                    style={{ fontSize: '20px', marginRight: '20px' }}
                >
                    <i className="feather icon-edit-2"></i>
                </span>

                <button
                    type="button"
                    data-modal="deletecategory"
                    className="waves-effect waves-dark md-trigger"
                    style={{ fontSize: '20px' }}
                >
                    <span className="pcoded-micon">
                        <i className="feather icon-trash"></i>
                    </span>
                </button>
            </div>
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

    closeModal = () => {
        const { showModal } = this.state;
        this.setState({ showModal: !showModal });
    }

    onOpenModal = () => {
        console.log("ruchi called")
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const columns = [
            {
                dataField: 'title',
                text: 'Category Name',
                sort: true,
            },
            {
                dataField: 'created',
                text: 'Created on',
                sort: true,
            },
            {
                dataField: 'category',
                text: 'Quizes under Category',
                sort: true,
            },
            {
                dataField: 'status',
                text: 'Status',
                sort: true,
                formatter: this.switchComponent

            },
            {
                dataField: 'actions',
                text: 'Actions',
                sort: true,
                formatter: this.rankFormatter,
            },
        ];

        const { open, quizList } = this.state;

        return (
            <div>
                <div className="pcoded-content">
                    <div className="page-header card" style={{ border: 'none' }}>
                        <div className="row align-items-end">
                            <div className="col-lg-4">
                                <div className="page-header-title">
                                    <a href="/quiz">
                                        <i className="ti-angle-left bg-c-blue"></i>
                                    </a>
                                    <div className="d-inline">
                                        <h5>Quiz Category</h5>
                                    </div>
                                    <ModalA />
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <div className="page-header-breadcrumb">
                                    <a
                                        // href="#addcategory"
                                        // data-toggle="modal"
                                        className="btn btn-primary btn-sm"
                                        onClick={() => this.onOpenModal()}
                                        style={{
                                            backgroundColor: '#db3d24',
                                            borderColor: '#db3d24',
                                            color: '#fff',
                                            cursor: 'pointer'
                                        }}>

                                        Add Category
                            </a>
                                    <button onClick={this.onOpenModal}>
                                        Launch demo modal
      </button>
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
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12">
                                                    <ToolkitProvider
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
                                                                                            // options={tableOptions}
                                                                                            striped
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
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* 
                <div>

                    <Modal show={open} onHide={this.onCloseModal}>
                        <Modal.Header >
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <button variant="secondary" onClick={this.onCloseModal}>
                                Close
                             </button>
                            <button variant="primary" onClick={this.onCloseModal}>
                                Save Changes
                             </button>
                        </Modal.Footer>
                    </Modal>
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    quizCategoryListReducer: state.quizCategoryListReducer
})

const mapDispatchToProps = dispatch => ({

    fetchQuizCategories: () => {
        dispatch(fetchQuizCategories())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizCategory);
