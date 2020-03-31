import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, { PaginationProvider, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import Switch from "react-switch";
import '../../assets/css/custom';
import '../../assets/css/style';
import 'bootstrap/dist/css/bootstrap.min.css';

const customTotal = (from, to, size) => {
    return (
        <span className="react-bootstrap-table-pagination-total">
            Showing {from} to {to} of {size} Results
        </span>
    );
}

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

const products = [
    { id: 1, question: "Daily Routine 1", o1: "Loreum 1", o2: "Loreum 2", o3: "Loreum 3", o4: "Loreum 4", active: true, actions: `` },
]


const { SearchBar } = Search;

const defaultSorted = [{
    dataField: 'id',
    order: 'desc'
}];

class QuizDetails extends Component {

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

    render() {
        const columns = [
            {
                dataField: 'question',
                text: 'Question',
                sort: true,
                headerStyle: () => {
                    return { width: "20%" };
                },
                style: { 'white-space': 'nowrap' }
            }, {
                dataField: 'o1',
                text: 'option 1',
                sort: true,
            },
            {
                dataField: 'o2',
                text: 'option 2',
                sort: true,
            },
            {
                dataField: 'o3',
                text: 'option 3',
                sort: true,
            },
            {
                dataField: 'o4',
                text: 'option 4',
                sort: true,
            },
            {
                dataField: 'answer',
                text: 'Answer',
                sort: true,
            },
            {
                dataField: 'active',
                text: 'Active/Inactive',
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
        return (
            <div className="pcoded-content">

                <div className="page-header card" style={{ border: 'none' }}>
                    <div className="row align-items-end">
                        <div className="col-lg-4">
                            <div className="page-header-title">
                                <a href="quiz.html"><i className="ti-angle-left bg-c-blue"></i></a>
                                <div className="d-inline">
                                    <h5>Quiz Detail</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="page-header-breadcrumb">
                                <a href="#" className="btn btn-primary btn-sm">Edit</a>
                                <a href="addnewquiz.html" className="btn btn-primary btn-sm">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pcoded-inner-content">
                    <div className="main-body innerpage">
                        <div className="page-wrapper">
                            <div className="page-body">

                                <div className="row">
                                    <div className="col-xxl-3 col-sm-6">
                                        <div className="card prod-p-card">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <h6 className="m-b-5">Active / Inactive Quiz</h6>
                                                        <h3 className="m-b-0 f-w-700 text-success">Active</h3>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="fas fa-question card-red f-18"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-sm-6">
                                        <div className="card prod-p-card">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <h6 className="m-b-5">Total Response</h6>
                                                        <h3 className="m-b-0 f-w-700">40</h3>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="far fa-user card-red f-18"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-sm-6">
                                        <div className="card prod-p-card">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <h6 className="m-b-5">Quiz Created On</h6>
                                                        <h3 className="m-b-0 f-w-700">20/12/2019</h3>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="far fa-calendar card-red f-18"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-sm-6">
                                        <div className="card prod-p-card">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <h6 className="m-b-5">Quiz Status</h6>
                                                        <h3 className="m-b-0 f-w-700">Live / In Development</h3>
                                                    </div>
                                                    <div className="col-auto">
                                                        <i className="far fa-edit card-red f-18"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-block">
                                        <form className="">
                                            <div className="row">
                                                <div className="col-12 col-sm-6">
                                                    <div className="form-group">
                                                        <label className="float-label">Title*</label>
                                                        <input type="text" name="user-name" className="form-control" required="" value="Daily routine" />

                                                    </div>

                                                    <div className="form-group">
                                                        <label className="float-label">Topic Name</label>
                                                        <input type="text" name="topic-name" className="form-control" required="" value="Ipsum" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="float-label">Description</label>
                                                        <textarea className="form-control">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</textarea>
                                                    </div>

                                                </div>

                                                <div className="col-12 col-sm-6">
                                                    <div className="form-group">
                                                        <label className="float-label">Category</label>
                                                        <select className="form-control" required>
                                                            <option>Loreum</option>
                                                            <option>Select Category</option>
                                                            <option>Select Category</option>
                                                        </select>


                                                    </div>
                                                    <div className="form-group">
                                                        <label className="float-label">Quiz Cover Image</label>
                                                        <img className="mb-2 covrimg" src="files/assets/images/animate.jpg" />
                                                        <input type="file" className="form-control" required="" />
                                                    </div>

                                                </div>

                                            </div>

                                            <a href="#!" className="btn btn-sm btn-success">Approve</a>
                                            <a href="#!" className="btn btn-sm btn-primary">Disapprove</a>

                                        </form>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-block">

                                        <div className="card-header">
                                            <h5>Question List</h5>
                                            <div className="card-header-right">
                                                <div className="text-right">
                                                    <a href="#!" className=" b-b-primary text-primary">View all</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="page-header-breadcrumb">
                                                <a href="#" className="btn btn-primary btn-sm">Add New Question</a>
                                            </div>
                                        </div>
                                        {/* <div className="dt-responsive table-responsive"> */}
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12">
                                                <ToolkitProvider
                                                    bootstrap4
                                                    keyField='id'
                                                    data={products}
                                                    columns={columns}
                                                    defaultSorted={defaultSorted}
                                                    striped
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
                                                                                        {...props.baseProps}
                                                                                        {...paginationTableProps}
                                                                                        striped
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
                                        {/* </div> */}


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



export default QuizDetails;
