import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <img src="../images/404.jpg" alt="404 Not Found" />
          <Button href="/home" variant="primary">
            Вернуться на главную
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
