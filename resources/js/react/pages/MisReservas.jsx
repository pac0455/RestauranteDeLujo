import React,{useEffect,useState} from 'react'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import {getMisReservas} from '../services/fecth';
function MisReservas() {
  const [Logueado , setLogueado] = useState()
  const [Reservas, setReservas] = useState()
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token === "" || token === undefined) {
      setLogueado(false);
    } else {
      setLogueado(true);
      const fetchData = async () => {
        let token = localStorage.getItem('token')
        const data = await getMisReservas(token);
        console.log(data);
        setReservas(data);
      }
      fetchData();
    }
  }, []);
  return (
    <div className='app__bg text-white min-h-screen p-3'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker className='w-96 rounded-lg shadow-inner'
          onChange={e => {
            setfecha(e)
            setNodatos(true)
          }}
          displayWeekNumber={true}
          /*                             shouldDisableDate={(date) => {
                                          return Dias && !Dias.includes(date.format('YYYY-MM-DD'))
                                      }} */

          defaultValue={dayjs(`${dayjs().add(1, 'day').format('YYYY-MM-DD')} 21:00`)}
        />
      </LocalizationProvider>
    </div>

  )
}

export default MisReservas