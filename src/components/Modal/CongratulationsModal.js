// CongratulationsModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const CongratulationsModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="congratulations-modal-header"> 
        <Modal.Title>Поздравляем!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="congratulations-modal-body">
        <p>Ваша заявка на вакансию успешно отправлена.</p>
        <p>Мы свяжемся с вами в ближайшее время.</p>
      </Modal.Body>
      <Modal.Footer className="congratulations-modal-footer">
        <Button variant="primary" onClick={handleClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CongratulationsModal;
