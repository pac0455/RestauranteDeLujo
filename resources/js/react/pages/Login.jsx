import React, { useEffect, useState } from 'react';

import SubHeading from '../components/SubHeading/SubHeading';

import { Link } from 'react-router-dom';

const Login = () => {
  const [password, SetPassword] = useState()
  const [email, SetEmail] = useState()
const [Fallo, setFallo] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('https://daw10.medacarena.com.es/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token);
        // Redirigir al usuario a la página deseada
        window.location.href = '/';
      })
      .catch(error => {
        console.error('There was a problem with the login:', error.message);
        setFallo(true)
      });
  }
  
    
  return (
    <>
    <div className='bg-[#0C0C0C] flex flex-col justify-center items-center '>
    {Fallo ?(
      <div className='bg-red-500/40 h-32 w-1/2 flex items-center mt-8'>
      <p className='text-white text-center w-full'>Contraseño o email inexistentes</p>
    </div>
    ):''}
      <div className="  border border-[#C0B176] py-4 px-8 bg-black sm:w-full sm:mt-6 lg:mt-20 lg:w-2/4 ">
        <div className="app__newsletter-heading text-center">
          <SubHeading title="Login" className="p__cormorant" />

        </div>
        <form onSubmit={e=>handleLogin(e)} className="flex flex-col items-center gap-7 mt-12 text-white">
          <input onChange={(e) => SetEmail(e.target.value)} type="email" autoComplete='on' required placeholder="Enter your email address" className="w-full lg:w-96 border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
          <input onChange={(e) => SetPassword(e.target.value)} type="password" required placeholder="Enter your password" className="w-full lg:w-96 border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
          <Link className='underline' to={'/register'}>No tienes cuenta?</Link>
          <button type="submit" className="custom__button bg-crimson text-black font-bold tracking-wide uppercase px-6 py-2 lg:py-3 lg:px-8 border-none outline-none cursor-pointer sm:w-full lg:w-64 xl:w-96 ">
            Login
          </button>
        </form>
      </div>

    </div>
    </>
  )
}


export default Login;
