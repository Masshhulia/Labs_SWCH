import React, { useState, useContext } from 'react';
import { Button, Form, Modal, Alert } from 'react-bootstrap';
import ChangePasswordForm from './ChangePasswordForm';
import { registration, login } from '../../http/userApi';
import { Context } from '../../index';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import './AuthForm.css'; 

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const {user} = useContext(Context)
  const [role, setRole] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!validator.isEmail(email)) {
      setError('Неверный формат электронной почты');
      return;
    }
    if (!validator.isLength(password, { min: 8 })) {
      setError('Пароль должен содержать не менее 8 символов');
      return;
    }
    try {
      const data = await registration(email, password, role);
      console.log(data);
      setShowAlert(true); 
    } catch (error) {
      console.error('Error during registration:', error);
      setError(error.response.data.message)
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!validator.isEmail(email)) {
      setError('Неверный формат электронной почты');
      return;
    }
    try {
      const data = await login(email, password);
      console.log(data);
      localStorage.setItem('auth', true);
      navigate('/employees');
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.response.data.message)
    }
  };

  return (
    <Form className="auth-form">
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Введите email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="primary" onClick={handleRegister} className="auth-button">
        Зарегистрироваться
      </Button>
      <Button variant="secondary" onClick={handleLogin} className="auth-button">
        Войти
      </Button>
      <Button variant="link" onClick={handleShow} className="auth-button">
        Забыли пароль?
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Смена пароля</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChangePasswordForm />
        </Modal.Body>
      </Modal>
      {error && <div className="error" style={{ color: 'red' }}>{error}</div>}

      {showAlert && 
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Вы успешно зарегистрировались!
        </Alert>
      }
    </Form>
  );
};

export default RegistrationForm;
