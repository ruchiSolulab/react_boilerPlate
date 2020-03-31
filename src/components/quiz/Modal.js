import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

export class ModalA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  render() {
    const { show } = this.state;
    return (
      <>
        <button variant="primary" onClick={this.handleShow}>
          Launch demo modal
      </button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <button onClick={this.handleClose}>
              Close
          </button>
            <button onClick={this.handleClose}>
              Save Changes
          </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalA;
