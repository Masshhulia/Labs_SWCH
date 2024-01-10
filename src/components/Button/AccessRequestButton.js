import React from 'react';
import Button from 'react-bootstrap/Button';

const AccessRequestButton = ({ onClick }) => {
  return (
    <Button variant="primary" onClick={onClick}>
      Запросить допуск
    </Button>
  );
};

export default AccessRequestButton;
