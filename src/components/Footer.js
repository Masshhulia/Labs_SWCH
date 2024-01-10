import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="contact-info">
        <h4>Контакты</h4>
        <p>Телефон: +375 (33) 12231133</p>
        <p>Email: info@gmail.com</p>
      </div>
      <div className="about-us">
        <h4>О нас</h4>
        <p>Мы - ваш надежный партнер в обеспечении безопасности и эффективности рабочих процессов.</p>
      </div>
      <div className="social-links">
        <h4>Мы в социальных сетях</h4>
        <ul>
          <li><a href="https://www.facebook.com/">Facebook</a></li>
          <li><a href="https://twitter.com/">Twitter</a></li>
          <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
        </ul>
      </div>
      <p>&copy; 2023 Ваше супер удобное приложение для учета сотрудников</p>
    </footer>
  );
};

export default Footer;

