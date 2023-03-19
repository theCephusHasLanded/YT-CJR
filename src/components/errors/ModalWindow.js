import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./ErrorMessage.css"

function ModalWindow() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Danger Will Robinson!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        You have reached an error.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;



/*
WAS:

import React from "react"
import "./ErrorMessage"


export default function ModalWindow() {

    return (
    // Trigger/Open The Modal -->
    <>
    <button id="myBtn">Open npm Modal</button>

    {/* <!-- The Modal --> *
    <div id="myModal" className="modal">

    {/*    // <!-- Modal content --> *

    <div className="modal-content">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
    </div>

    </div>
</>
    )
}
*/
