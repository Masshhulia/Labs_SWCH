import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';


const AboutUs = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleShowModal = () => setShowContactModal(true);
  const handleCloseModal = () => setShowContactModal(false);

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
  };

  return (
    <Container className="about-us-container">
      <Row>
        <Col>
          <h2 className="section-title">О нас</h2>
          <p className="section-description">
            Мы - команда профессионалов, заботящихся о вашей безопасности. Наша цель - предоставить вам
            эффективные инструменты для учета сотрудников и безопасного выполнения опасных работ.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3 className="section-title">Наша миссия</h3>
          <p className="section-description">
            Мы стремимся обеспечить безопасность ваших работников, предоставляя современные и интуитивно
            понятные инструменты для учета и управления допусками к опасным видам работ.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3 className="section-title">Наша команда</h3>
          <Card className="team-member-card">
            <Card.Body>
              <Card.Title>Иван Иванов</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Генеральный директор</Card.Subtitle>
              <Card.Text>
                Иван Иванов ответственен за стратегическое руководство и развитие нашей компании.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h3 className="section-title">Свяжитесь с нами</h3>
          <p className="section-description">
            Если у вас есть вопросы или предложения, не стесняйтесь связаться с нами.
          </p>
          <div className="mt-4">
          <Button variant="primary" className="contact-button" onClick={handleShowModal}>
            Написать нам
          </Button>
          </div>
        </Col>
      </Row>

      <Modal show={showContactModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Форма обратной связи</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleContactFormSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Имя</Form.Label>
              <Form.Control type="text" placeholder="Введите ваше имя" />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Электронная почта</Form.Label>
              <Form.Control type="text" placeholder="Введите email" />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Вопрос</Form.Label>
              <Form.Control type="text" placeholder="Введите ваш вопрос" />
            </Form.Group>
            <div className="mt-4">
            <Button variant="primary" type="submit">
              Отправить
            </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AboutUs;
