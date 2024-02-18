export const getHoras= async ()=>{
    const result=await fetch('http://localhost/example-app/public/api/getHoras')
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
export const logout= async ()=>{
    const result=await fetch('http://localhost/example-app/public/api/logoutUser')
    return await result.json()
}