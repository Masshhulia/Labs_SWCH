import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <ul>
          <li>
            <Link to="/home">Главная</Link>
          </li>
          <li>
            <Link to="/employees">Список работников</Link>
          </li>
          <li>
            <Link to="/dangerous-works">Опасные работы</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/services">Услуги</Link>
          </li>
          <li>
            <Link to="/reviews">Отзывы</Link>
          </li>
          <li>
            <Link to="/careers">Карьера</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
