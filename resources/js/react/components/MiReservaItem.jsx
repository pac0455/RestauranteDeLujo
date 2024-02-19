import React from 'react'

function MiReservaItem({ Reservas }) {
    const listaDatos = Reservas && Reservas.dataReserva.map(reserva => {
        const fecha = Reservas.dataFecha.find(fecha => fecha.id === reserva.id_fecha);
        const menu = Reservas.dataMenu.find(menu => menu.id === reserva.id_menu);
        const usuario = Reservas.dataUser.find(user => user.id === reserva.id_user);
        return {
            id: reserva.id,
            nombre: reserva.nombre,
            email: reserva.email,
            CVV: reserva.CVV,
            nombre_tarjeta: reserva.nombre_tarjeta,
            n_tarjeta: reserva.n_tarjeta,
            id_menu: reserva.id_menu,
            descripcion_menu: menu ? menu.descripcion : null,
            id_fecha: reserva.id_fecha,
            dia_fecha: fecha ? fecha.dia : null,
            hora_fecha: fecha ? fecha.hora : null,
            id_usuario: usuario ? usuario.id : null,
            nombre_usuario: usuario ? usuario.name : null,
            email_usuario: usuario ? usuario.email : null
        };
    });
    console.log(listaDatos);
    return (
        <div className='text-white'>MiReservaItem</div>
    )
}

export default MiReservaItem