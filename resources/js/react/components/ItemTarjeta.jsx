import React,{useState} from 'react'
import {deleteTarjeta,getAllDataUsers} from '../services/fecth';

function ItemTarjeta({tarjeta,setdata}) {
    const handleDelete=async id=>{
        let token=localStorage.getItem('token');
        console.log(token);
        const response=await deleteTarjeta(token,id)
        if(response.status){
            console.log(response)
            alert(response.message)
            const fecth = async () => {
                const response = await getAllDataUsers(localStorage.getItem('token'));
                console.log(response);
                setdata(response)
            }
            fecth()
        }else{
            console.log(response);
            alert(response.message)
        }
    }
    return (
        <div  className='bg-[#0C0C0C] h-60 p-4 border border-white rounded-lg w-full sm:lg-96 md:lg-96 lg:w-96 '>
            <p className='text-white'><span className='font-semibold'>CVV:</span> {tarjeta.CVV}</p>
            <p className='text-white'><span className='font-semibold'>Nombre de la tarjeta:</span> {tarjeta.nombre_tarjeta}</p>
            <p className='text-white'><span className='font-semibold'>Numero de tarjeta:</span> {tarjeta.n_tarjeta}</p> 
            <button onClick={() => handleDelete(tarjeta.id)} className='text-white bg-red-700 p-3 rounded-lg'>Borrar</button>
        </div>
    )
}
export default ItemTarjeta