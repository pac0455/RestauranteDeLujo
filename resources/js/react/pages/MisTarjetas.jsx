import React,{useEffect,useState} from 'react'
import { getAllDataUsers } from '../services/fecth';
import {ItemTarjeta} from '../components';
function MisTarjetas() {
    const [data, setdata] = useState()
    useEffect(() => {
        const fecth = async () => {
            const response = await getAllDataUsers(localStorage.getItem('token'));
            console.log(response);
            setdata(response)
        }
        fecth()
    }, [])
    return (
        <div className='flex flex-wrap justify-around gap-12 p-4 min-h-[70vh] app__bg'>
        { data && data.tarjeta_credito.map(tarjeta=>(
            <ItemTarjeta  key={tarjeta.id} tarjeta={tarjeta} setdata={setdata}/>
        ))}
        </div>
    )
}

export default MisTarjetas