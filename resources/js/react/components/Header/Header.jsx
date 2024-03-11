import React from 'react';
import { Link } from 'react-router-dom';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Experimenta nuevos sabores" />
      <h1 className="app__header-h1">La clave de la mala cocina</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>El aroma tentador de las especias recién molidas y el crujido dorado de la corteza recién horneada hacen que cada bocado sea una experiencia culinaria inolvidable </p>
      <Link to={'/carta'} className="custom__button">Explorar Menu</Link>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
