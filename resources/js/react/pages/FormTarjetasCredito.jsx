import React, { useState } from 'react'
import { SubHeading } from '../components';
import {addTarjeta} from '../services/fecth';
function FormTarjetasCredito() {
    const [cvv, setcvv] = useState()
    const [n_tarjeta, setn_tarjeta] = useState()
    const [Nombre_tarjeta, setNombre_tarjeta] = useState()
    const handleLengthCVV = (e) => {
        if (e.target.value.length > 3) {
            e.target.value = 999
        }
        if (e.target.value < 0) {
            e.target.value = 111
        }
        setcvv(e.target.value)
    }
    const handleAddTarjeta = async (e) => {
        e.preventDefault();
        const token=localStorage.getItem('token')
        const response=await addTarjeta(token,n_tarjeta,Nombre_tarjeta,cvv)
        if(response.status){
            console.log(response);
            alert('Tarjeta añadida correctamente')
            window.location.href='/misTarjetas'
        }else{
            console.log(response);
            alert('Ha habido un problema')
        }
    }
    return (
        <div className='bg-[#0C0C0C] flex justify-center flex-col items-center '>
            <div className="  border border-[#C0B176] py-4 px-8 bg-black sm:w-full sm:mt-6 lg:mt-20  lg:w-2/4 ">
                <div className="app__newsletter-heading text-center">
                    <SubHeading title="Añadir tarjeta" className="p__cormorant text-sm" />
                </div>
                <form onSubmit={e => handleAddTarjeta(e)} className="flex items-center flex-col gap-7 mt-12 text-white">

                    <div className='flex flex-col gap-4 w-full'>
                        <div>
                            <input type="text" onChange={(e) => setNombre_tarjeta(e.target.value)} required placeholder='Nombre de la tarjeta' className="w-full border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
                        </div>
                        <div className='flex justify-around'>
                            <input type="text" onChange={(e) => setn_tarjeta(e.target.value)} required placeholder='Numero de tarjeta' className=" border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
                            <input onChange={(e) => handleLengthCVV(e)} type="number" required placeholder='CVV' className=" border border-golden rounded px-4 py-2 text-white bg-black  lg:mb-0 lg:rounded-lg lg:px-6 lg:py-3" />
                        </div>
                    </div>
                    <button type="submit" className="custom__button bg-crimson text-black font-bold tracking-wide uppercase px-6 py-2 lg:py-3 lg:px-8 border-none outline-none cursor-pointer sm:w-full lg:w-64 xl:w-96  hover:rounded-lg transition-all">
                        Añadir tarjeta
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormTarjetasCredito