import React, { useState, useEffect } from 'react'
import SubHeading from '../components/SubHeading/SubHeading';
import { Link, useParams } from 'react-router-dom';
import { getAllDataUsers } from '../services/fecth';
import { ReservarUserLogueado } from '../services/fecth';

function Reservar_datos() {
  const { dia, hora } = useParams()
  const [Logueado, setLogueado] = useState()
  const [data, setdata] = useState()
  const [cvv, setcvv] = useState()
  const [n_tarjeta, setn_tarjeta] = useState()
  const [Nombre_tarjeta, setNombre_tarjeta] = useState()
  const [menu, setmenu] = useState()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token == "" || token == undefined) {
      setLogueado(false)
    } else {
      setLogueado(true)
      const fecth = async () => {
        const response = await getAllDataUsers(localStorage.getItem('token'));
        setdata(response)
      }
      fecth()
    }
  }, [Logueado])
  const handleLength = (e) => {
    if (e.target.value.length > 3 && e.target.value < 0) {
      e.target.value = 999
    }
  }

  const handleTarjetaCredito = (e) => {
    const tarjeta_select = data.tarjeta_credito.find(tarjeta => tarjeta.id == e.target.value)
    console.log(tarjeta_select)
    setNombre_tarjeta(tarjeta_select.nombre_tarjeta)
    setn_tarjeta(tarjeta_select.n_tarjeta)
    setcvv(tarjeta_select.CVV)
  }
  const handleSubmitLogueado = (e) => {
    e.preventDefault()
    let token = localStorage.getItem('token')
    try {
      if(menu==null) throw new Error('No hay un menu seleccionado');
        ReservarUserLogueado(token,dia,hora,menu)
        window.location.href='/'
      } catch (error) {
        alert(error.message);
      }
  }
  return (
    Logueado ? (
      <div className='bg-[#0C0C0C] flex justify-center flex-col items-center '>
        <div className='w-full flex gap-1 mt-9'>
          <div className='my-3 w-1/2 h-1 bg-[#DCCA75]'></div>
          <div className='my-3 w-1/2 h-1 bg-[#DCCA75]'></div>
        </div>
        <div className="  border border-[#C0B176] py-4 px-8 bg-black sm:w-full sm:mt-6 lg:mt-20  lg:w-2/4 ">
          <div className="app__newsletter-heading text-center">
            <SubHeading title="Reservar" className="p__cormorant text-sm" />
          </div>
          <form onSubmit={e => handleSubmitLogueado(e)} className="flex items-center flex-col gap-7 mt-12 text-white">
            <select onChange={e => handleTarjetaCredito(e)} className=" lg:w-1/2 border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" >
              <option  value="">Selecciona una tarjeta</option>

              {data && data.tarjeta_credito.map(e => <option value={e.id}>{e.nombre_tarjeta}</option>)}
            </select>
            <div className='flex gap-4 w-full'>
              <input type="date" required defaultValue={dia} className=" lg:w-1/2 border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
              <input type="time" required defaultValue={`${hora}:00`} className=" lg:w-1/2 border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <div>
                <input type="text" defaultValue={Nombre_tarjeta} readOnly required placeholder='Nombre de la tarjeta' className="w-full border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
              </div>
              <div className='flex justify-around'>
                <input type="text" defaultValue={n_tarjeta} readOnly required placeholder='Numero de tarjeta' className=" border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
                <input readOnly defaultValue={cvv} required onChange={(e) => handleLength(e)} type="number" placeholder='CVV' className=" border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
                <select onChange={e => setmenu(e.target.value)} className="  border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" >
                  <option disabled value="">Selecciona un menu</option>
                  <option value="1">Menu1</option>
                  <option value="2">Menu2</option>
                  <option value="3">Menu3</option>
                </select>
              </div>
            </div>
            <button type="submit" className="custom__button bg-crimson text-black font-bold tracking-wide uppercase px-6 py-2 lg:py-3 lg:px-8 border-none outline-none cursor-pointer sm:w-full lg:w-64 xl:w-96  hover:rounded-lg transition-all">
              Reservar
            </button>
          </form>
        </div>
      </div>
    ) : (

      <div className='bg-[#0C0C0C] flex justify-center flex-col items-center '>
        <div className='w-full flex gap-1'>
          <div className='my-3 w-1/2 h-1 bg-[#DCCA75]'></div>
          <div className='my-3 w-1/2 h-1 bg-[#DCCA75]'></div>
        </div>
        <div className="  border border-[#C0B176] py-4 px-8 bg-black sm:w-full sm:mt-6 lg:mt-20  lg:w-2/4 ">
          <div className="app__newsletter-heading text-center">
            <SubHeading title="Reservar" className="p__cormorant text-sm" />
          </div>
          <form onSubmit={e => handleLogin(e)} className="flex items-center flex-col gap-7 mt-12 text-white">
            <div className='flex gap-4 w-full'>
              <input onChange={(e) => SetEmail(e.target.value)} type="email" required placeholder="Enter your email address" className=" lg:w-1/2 border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
              <input onChange={(e) => SetPassword(e.target.value)} type="password" required placeholder="Enter your password" className=" lg:w-1/2 border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
            </div>
            <div className='flex gap-4 w-full'>
              <input type="date" required defaultValue={dia} className=" lg:w-1/2 border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
              <input type="time" required defaultValue={`${hora}:00`} className=" lg:w-1/2 border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <div>
                <input type="text" required placeholder='Nombre de la tarjeta' className="w-full border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
              </div>
              <div className='flex justify-around'>
                <input type="text" required placeholder='Numero de tarjeta' className=" border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
                <input onChange={(e) => handleLength(e)} type="number" required placeholder='CVV' className=" border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
                <select onChange={e => handleTarjetaCredito(e)} className=" lg:w-1/2 border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" >
                  <option value="">Selecciona un menu</option>
                  <option value="menu1">Menu 1</option>
                  <option value="menu2">Menu 2</option>
                  <option value="menu3">Menu 3</option>
                </select>
              </div>
            </div>
            <button type="submit" className="custom__button bg-crimson text-black font-bold tracking-wide uppercase px-6 py-2 lg:py-3 lg:px-8 border-none outline-none cursor-pointer sm:w-full lg:w-64 xl:w-96  hover:rounded-lg transition-all">
              Reservar
            </button>
          </form>
        </div>
      </div>
    )
  )
}

export default Reservar_datos