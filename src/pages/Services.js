
import React from 'react';
import ServiceItem from '../components/serviceItems/ServiceItem';
import servicesData from './services.json';
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => {
  return (
    <Container>
      <h2 className="mt-5 mb-4">Наши Услуги</h2>
      <Row>
        {servicesData.map((service, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <ServiceItem service={service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
