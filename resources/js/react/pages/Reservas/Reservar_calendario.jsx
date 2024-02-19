import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { FaArrowRight } from 'react-icons/fa';
import { getHoras } from '../../services/fecth';
import './Reservar.css';

function Reservar() {
    const [fecha, setfecha] = useState(null)
    const [FechasDisponibles, setFechasDisponibles] = useState([])
    const [Nodatos, setNodatos] = useState(false)
    const [Dias, setDias] = useState()
    useEffect(() => {
        const fecth = async () => {
            const data = await getHoras();
            setFechasDisponibles(data)
            setDias([...new Set(data.map(fecha => fecha.dia))])
            console.log(700%26);
        }
        fecth()
    }, [])
    const handleSiguiente = () => {
        if (!Nodatos) {
            alert('No has puesto hora ni dia, campo obligario')
        } else {
            window.location.href = `/reservarDatos/${fecha.format('YYYY-MM-DD')}/${fecha.hour()}`
        }
    }
    return (
        <>
            <div className='w-full flex justify-center flex-col items-center app__bg min-h-[80vh] p-7' >
                <div className='w-full flex gap-1'>
                    <div className='my-3 w-1/2 h-1 bg-[#DCCA75]'></div>
                    <div className='my-3 w-1/2 h-1 bg-white'></div>
                </div>
                <div className='flex gap-10 p-7'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                        <StaticDateTimePicker className='sm:w-96 xs:w-full rounded-lg shadow-inner'
                            onChange={e => {
                                setfecha(e)
                                setNodatos(true)
                            }}
                            disablePast
                            displayWeekNumber={true}
                            ampmInClock={false}
                            shouldDisableTime={(time) => {
                                const date = time.format('YYYY-MM-DD');
                                const hour = time.hour();
                                return !FechasDisponibles.some((fechaDisponible) => fechaDisponible.dia == date && parseInt(fechaDisponible.hora.split(':')[0]) == hour);
                            }}
                            shouldDisableDate={(date) => {
                                return Dias && !Dias.includes(date.format('YYYY-MM-DD'))
                            }}
                            views={['day', 'hours']}
                            defaultValue={ dayjs(`${dayjs().add(1,'day').format('YYYY-MM-DD')} 21:00`)}
                        />
                    </LocalizationProvider>
                </div>
                <div className=' px-10  w-full'>
                    <button onClick={handleSiguiente} className='border border-white bg-black p-3 text-3xl rounded-xl text-[#DCCA87] items-center gap-4 flex' >
                        SIGUIENTE
                        <FaArrowRight className='text-white' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Reservar