import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { getMisReservas, deleteReserva } from '../services/fecth';
function MisReservas() {
  const [Logueado, setLogueado] = useState()
  const [Reservas, setReservas] = useState([])
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token === "" || token === undefined) {
      setLogueado(false);
    } else {
      setLogueado(true);
      const fetchData = async (token) => {
        const data = await getMisReservas(token);
        setReservas(data);
      }
      fetchData(token);
    }
  }, []);
  const handleDelete = async (id) => {
    const response = await deleteReserva(id)
    window.location.reload()
    console.log(response);
  }
  return (
    <div className='flex flex-wrap  gap-20 p-4 min-h-[50vh] app__bg w-full'>
      {Reservas.length == 0 ? (
        <div className='w-full h-full flex justify-center items-center'>
          <p className='text-white font-bold text-3xl '>No hay reservas</p>
        </div>
      ) : (
        Reservas.map(reserva => (
          <div key={reserva.id} className='bg-[#0C0C0C] h-64 p-4 border border-white rounded-lg w-full sm:lg-96 md:lg-96 lg:w-96 '>
            <h1 className='text-white font-semibold text-center text-6xl mb-5'>{reserva.user.name}</h1>
            <p className='text-white'><span className='font-semibold'>Id_reserva:</span> {reserva.id}</p>
            <p className='text-white'><span className='font-semibold'>Fecha de la reserva:</span> {reserva.fecha.dia}</p>
            <p className='text-white'><span className='font-semibold'>Hora de la reserva:</span> {reserva.fecha.hora}</p>
            <p className='text-white'><span className='font-semibold'>Menu de la reserva:</span> {reserva.menu.descripcion}</p>
            <button onClick={() => handleDelete(reserva.id)} className='text-white bg-red-700 p-3 rounded-lg'>Borrar</button>
          </div>
        ))
      )}
    </div>
  )
}

export default MisReservas