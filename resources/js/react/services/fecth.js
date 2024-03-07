export const getHoras= async (token)=>{
    const result=await fetch('http://daw10.medacarena.com.es/public/api/getHoras',{
        /* headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }, */
    })
    return await result.json()
}
export const getMisReservas= async (token)=>{
    const result=await fetch('http://localhost/example-app/public/api/getReservasUser',{
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    return await result.json()
}
export const registro = async (name, email,password,nombre_tarjeta,cvv,n_tarjeta) => {
    const result = await fetch('http://localhost/example-app/public/api/createUser', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            nombre_tarjeta: nombre_tarjeta,
            CVV:cvv,
            n_tarjeta:n_tarjeta
        }) 
    });
    return await result.json(); 
};
export const getAllDataUsers= async (token)=>{
    const result=await fetch('http://localhost/example-app/public/api/getAllDataUsers',{
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    return await result.json()
}
export const ReservarUserLogueado= async (token,dia,hora,menu)=>{
    console.log(menu);
    console.log(dia);
    console.log(hora);
        const result=await fetch('http://localhost/example-app/public/api/reservarLogueado',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                dia:dia,
                hora:hora + ':00',
                menu:menu
            })
        })
        console.log(result);
        return await result.json()

}
export const ReservarUserNoLogueado= async (dia,hora,menu,nombre,email,CVV,nombre_tarjeta,n_tarjeta)=>{
    const result=await fetch('http://localhost/example-app/public/api/reservarNoLogueado',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            dia:dia,
            hora:hora + ':00',
            menu:menu,
            nombre:nombre,
            email:email,
            CVV:CVV,
            nombre_tarjeta:nombre_tarjeta,
            n_tarjeta:n_tarjeta,
        })
    })
    return await result.json()
}

export const deleteReserva= async (id)=>{
    const result=await fetch('http://localhost/example-app/public/api/deleteReserva',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            id:id,
        })
    })
    return await result.json()
}
export const deleteTarjeta= async (token,id)=>{
    const result=await fetch('http://localhost/example-app/public/api/deleteTarjeta',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            id:id,
        })
    })
    return await result.json()
}
export const addTarjeta= async (token,n_tarjeta,nombre_tarjeta,CVV)=>{
    const result=await fetch('http://localhost/example-app/public/api/addTarjeta',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            n_tarjeta:n_tarjeta,
            nombre_tarjeta:nombre_tarjeta,
            CVV:CVV
        })
    })
    return await result.json()
}