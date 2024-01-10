import React from 'react';
import '../styles.css';
import RegistrationForm from '../components/Forms/RegForm';

const Home = () => {
  return (
    <div className="center-container">
      <div className="home-page">
        <h1>Добро пожаловать в приложение для учета допуска к опасным работам!</h1>
        <p>Здесь вы можете управлять допуском работников к опасным видам работ на предприятии.</p>
        <RegistrationForm/>
      </div>
    </div>
  );
};

export default Home;


