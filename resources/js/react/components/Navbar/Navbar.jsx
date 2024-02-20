import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FaCircleUser } from "react-icons/fa6";
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [logueado, setLogueado] = useState(true);
  const [opciones, setOpciones] = useState(false)
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token == "" || token == undefined) {
      setLogueado(false)
    } else {
      setLogueado(true)
    }
  }, [logueado])
  const handleLogut = () => {
    localStorage.setItem('token', '')
    window.location.href = '/login'
  }
  const classLiLogin="hover:bg-gray-700 transition-all cursor-pointer p-2 rounded-lg md:text-center md:text-2xl lg:text-2xl"
  return (
    <nav className="app__navbar p-2">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li><Link className="p__opensans" to={"/"} onClick={() => setToggleMenu(false)}>Home</Link></li>
        <li className="p__opensans"><a href="#about">Sobro nosotros</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Premios</a></li>
        <li className="p__opensans"><a href="#contact">Contacto</a></li>
      </ul>
      {logueado ? (
        <div className='relative'>
                <FaCircleUser onClick={() => setOpciones(!opciones)} className='text-4xl cursor-pointer' color='white' />
                {opciones && (
                  <div className='w-40 h-96 bg-[#171513] absolute mt-7  right-1 md:w-64 md:h-screen lg:w-96 items-center'>
                    <div className='absolute -top-4 right-0 bg-[#171513]' style={{
                      width: '25px',
                      aspectRatio: '1/cos(30deg)',
                      clipPath: 'polygon(50% 0,100% 100%,0 100%)',
                    }}></div>
                    <ul className='p-3 text-white flex flex-col justify-center '>
                      <li onClick={handleLogut} className={classLiLogin}>Logut</li>
                      <li className={classLiLogin}>
                        <Link to={"/reservarCalendario"} onClick={() => setToggleMenu(false)}>Reservar</Link>
                      </li>
                      <li className={classLiLogin}>
                        <Link  to={"/misReservas"} onClick={() => setToggleMenu(false)}>Mis reservas</Link>
                      </li>
                      <li className={classLiLogin}>
                        <Link  to={"/addTarjeta"} onClick={() => setToggleMenu(false)}>Añadir tarjeta</Link>
                      </li>
                      <li className={classLiLogin}>
                        <Link  to={"/misTarjetas"} onClick={() => setToggleMenu(false)}>Mis tarjetas</Link>
                      </li>
                    </ul>
                  </div>)}
              </div>
      ) : (
        <div className=" ">
          <Link to={"/login"} className="p__opensans">Log In / Registro|</Link>
          <Link to={"/reservarCalendario"} className="p__opensans">Reservar</Link>
        </div>
      )}
      <div className="app__navbar-smallscreen">
        {
          <div className='flex gap-3'>
            <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
          </div>
        }
        {toggleMenu && (
          <>
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><Link to={"/"} onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Sobro nosotros</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Premios</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contacto</a></li>
            </ul>
          </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
