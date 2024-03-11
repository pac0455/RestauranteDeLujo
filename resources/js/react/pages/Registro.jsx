import React, { useState, useEffect } from 'react'
import SubHeading from '../components/SubHeading/SubHeading';
import { Link, useParams } from 'react-router-dom';
import { registro} from '../services/fecth';
function Registro() {
  const { dia, hora } = useParams()
  const [Logueado, setLogueado] = useState()
  const [password, SetPassword] = useState()
  const [email, SetEmail] = useState()
  const [Nombre, setNombre] = useState()
  const [cvv, setcvv] = useState()
  const [n_tarjeta, setn_tarjeta] = useState()
  const [Nombre_tarjeta, setNombre_tarjeta] = useState()
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token == "" || token == undefined) {
      setLogueado(false)
    } else {
      setLogueado(true)

    }
  }, [Logueado])
  const handleLengthCVV = (e) => {
    if (e.target.value.length > 3) {
      e.target.value = 999
    }
    if (e.target.value < 0) {
      e.target.value = 111
    }
    setcvv(e.target.value)
  }
  const handleRegistro = async (e) => {
    e.preventDefault()
    const response = await registro(Nombre,email,password,Nombre_tarjeta,cvv,n_tarjeta)
    console.log(response);
    if(response.status){
      localStorage.setItem('token', response.token)
      alert(response.message)
    }else{
      alert('Ha ocurrido un error')
      console.log(response.message);
    }
    window.location.reload()
  }
  return (
    <div className='bg-[#0C0C0C] flex justify-center flex-col items-center p-3 '>
      <div className="border border-[#C0B176] py-4 px-8 bg-black w-full sm:mt-6 lg:mt-20 lg:w-2/4">
        <div className="app__newsletter-heading text-center">
          <SubHeading title="Sign up" className="p__cormorant text-sm" />
        </div>
        <form onSubmit={e => handleRegistro(e)} className="flex items-center flex-col gap-7 mt-12 text-white">
          <div className='flex gap-4 w-full'>
            <input type="text" onChange={(e) => setNombre(e.target.value)}  placeholder='Nombre de usuario' required className="w-full border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
          </div>
          <div className='flex gap-4 w-full justify-around flex-wrap'>
            <input onChange={(e) => SetEmail(e.target.value)} type="email" required placeholder="Enter your email address" className=" lg:w-1/3 w-full border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
            <input onChange={(e) => SetPassword(e.target.value)} type="password" required placeholder="Enter your password" className=" lg:w-1/3 border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <div>
              <input type="text" onChange={(e) => setNombre_tarjeta(e.target.value)} required placeholder='Nombre de la tarjeta' className="w-full border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
            </div>
            <div className='flex gap-4 w-full justify-around flex-wrap'>
              <input type="text" onChange={(e) => setn_tarjeta(e.target.value)} required placeholder='Numero de tarjeta' className=" border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
              <input onChange={(e) => handleLengthCVV(e)} type="number" required placeholder='CVV' className=" border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
            </div>
          </div>
          <button type="submit" className="custom__button bg-crimson text-black font-bold tracking-wide uppercase px-6 py-2 lg:py-3 lg:px-8 border-none outline-none cursor-pointer sm:w-full lg:w-64 xl:w-96  hover:rounded-lg transition-all">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  )
}

export default Registro