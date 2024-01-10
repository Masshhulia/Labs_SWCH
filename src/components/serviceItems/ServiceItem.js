
import React, { useState } from 'react';
import CarouselComponent from '../Carousel/CarouselComponent';
import { Modal, Button, Form } from 'react-bootstrap';

const ServiceItem = ({ service }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(service);
  const [customerName, setCustomerName] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleOrderService = () => {
    console.log(`Заказ услуги: ${selectedService.title} от ${customerName}`);
    handleClose();
  };

  return (
    <div className="border p-3">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      
      <CarouselComponent images={service.images} />

      <div className="mt-3">
        <button onClick={handleShow} className="btn btn-primary">
          Заказать услугу
        </button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Заказ услуги: {selectedService.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="customerNameInput">
              <Form.Label>Ваше имя</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите ваше имя"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="customerNumberInput">
              <Form.Label>Ваш номер телефона</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите ваш номер телефона"
                value={customerNumber}
                onChange={(e) => setCustomerNumber(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleOrderService}>
            Заказать
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ServiceItem;
