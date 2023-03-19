import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function ModalWindow() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    // Redirect the user to the home page
    window.location.href = '/';
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        *Modal Window Prompt: For Grading Purposes*
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;
