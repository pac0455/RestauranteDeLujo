import React from 'react'
import pdf from '../assets/restaurante.pdf';
function Carta() {
  return (
    <div className='w-screen h-screen'>
        <embed className='w-full h-full'  src={pdf} type="" />
    </div>
  )
}

export default Carta