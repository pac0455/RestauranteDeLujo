import React from 'react'
import QRcode from 'react-qr-code';

function MenuQR() {
  return (
    <div className='app__bg min-h-[80vh] flex items-center justify-center'>

    <QRcode value='https://www.lafondadelaestacion.com/files/restaurante.pdf'/>
    </div>
  )
}

export default MenuQR