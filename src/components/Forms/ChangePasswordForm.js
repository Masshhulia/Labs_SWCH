import React, { useState } from 'react';
import { Button, Form,  Alert  } from 'react-bootstrap';
import { changePassword } from '../../http/userApi';
import validator from 'validator';
import './AuthForm.css'; 

const ChangePasswordForm = () => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleChangePassword = async (event) => {
    event.preventDefault();
    if (!validator.isEmail(email)) {
      setError('Неверный формат электронной почты');
      return;
    }
    if (!validator.isLength(newPassword, { min: 8 })) {
      setError('Новый пароль должен содержать не менее 8 символов');
      return;
    }
    try {
      const data = await changePassword(email, oldPassword, newPassword);
      console.log(data);
      setShowAlert(true); 
    } catch (error) {
      console.error('Error during password change:', error);
      setError(error.response.data.message)
    }
  };

  return (
    <Form className="auth-form">
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Введите email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formOldPassword">
        <Form.Label>Старый пароль</Form.Label>
        <Form.Control type="password" placeholder="Введите старый пароль" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formNewPassword">
        <Form.Label>Новый пароль</Form.Label>
        <Form.Control type="password" placeholder="Введите новый пароль" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </Form.Group>

      <Button variant="primary" onClick={handleChangePassword} className="auth-button">
        Сменить пароль
      </Button>
      {error && <div className="error" style={{ color: 'red' }}>{error}</div>}

      {showAlert && 
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Вы успешно сменили пароль!
        </Alert>
      }
    </Form>
  );
};

export default ChangePasswordForm;
