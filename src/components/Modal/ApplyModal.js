import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ApplyModal = ({ job, show, handleClose }) => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  const handleApply = () => {
    console.log(`Заявка на вакансию "${job.title}" от ${applicantName} (${applicantEmail})`);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Подать заявку на вакансию: {job.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="applicantNameInput">
            <Form.Label>Ваше имя</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите ваше имя"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="applicantEmailInput">
            <Form.Label>Ваш Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Введите ваш Email"
              value={applicantEmail}
              onChange={(e) => setApplicantEmail(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={handleApply}>
          Подать заявку
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ApplyModal;
