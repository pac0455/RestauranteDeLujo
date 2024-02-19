import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { getMisReservas } from '../services/fecth';
function MisReservas() {
  const [Logueado, setLogueado] = useState()
  const [Reservas, setReservas] = useState()
  let filterFechaSeleccionada;
  let filterReservasSeleccionada;
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token === "" || token === undefined) {
      setLogueado(false);
    } else {
      setLogueado(true);
      const fetchData = async (token) => {
        const data = await getMisReservas(token);
        console.log(data);
        setReservas(data);
      }
      fetchData(token);
    }
  }, []);
  return (
    <div className='app__bg  min-h-screen p-3 flex flex-wrap justify-around'>
      {Reservas && Reservas.map(reserva=>(
        <div className='bg-[#0C0C0C] sm:w-full lg:w-96 h-96 p-4 border border-white rounded-xl'>
          <h1 className='text-white font-semibold text-center text-6xl'>{reserva.user.name}</h1>
          <p className='text-white'><span className='font-semibold'>Id_reserva:</span> {reserva.id}</p>
          <p className='text-white'><span className='font-semibold'>Fecha de la reserva:</span> {reserva.fecha.dia}</p>
          <p className='text-white'><span className='font-semibold'>Hora de la reserva:</span> {reserva.fecha.hora}</p>
          <p className='text-white'><span className='font-semibold'>Menu de la reserva:</span> {reserva.menu.descripcion}</p>
        </div>
      ))}
    </div>

  )
}

export default MisReservas