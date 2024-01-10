import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import CongratulationsModal from '../Modal/CongratulationsModal';

const JobItem = ({ job }) => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showCongratulationsModal, setShowCongratulationsModal] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  const handleShowApplyModal = () => setShowApplyModal(true);
  const handleCloseApplyModal = () => setShowApplyModal(false);

  const handleShowCongratulationsModal = () => {
    setShowApplyModal(false);
    setShowCongratulationsModal(true);
  };

  const handleCloseCongratulationsModal = () => setShowCongratulationsModal(false);

  const handleApply = () => {
    console.log(`Заявка на вакансию "${job.title}" от ${applicantName} (${applicantEmail})`);
    handleShowCongratulationsModal();
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Card.Text>{job.description}</Card.Text>
        <Button variant="primary" onClick={handleShowApplyModal}>
          Подать заявку
        </Button>
      </Card.Body>

      <Modal show={showApplyModal} onHide={handleCloseApplyModal}>
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
          <Button variant="secondary" onClick={handleCloseApplyModal}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleApply}>
            Подать заявку
          </Button>
        </Modal.Footer>
      </Modal>

      <CongratulationsModal show={showCongratulationsModal} handleClose={handleCloseCongratulationsModal} />
    </Card>
  );
};

export default JobItem;
