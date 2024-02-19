import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import {Footer} from './pages/';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { Navbar,FooterOverlay} from './components';
import Login from './pages/Login';
import {Reservar_datos,Reservar_calendario,Registro,MisReservas,Carta,FormTarjetasCredito} from './pages/';


import './index.css';

function AppLayout() {
  return <>
    <Navbar />
    <Outlet />
    <FooterOverlay/>
    <Footer/>
  </>
}


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/reservarCalendario',
        element: <Reservar_calendario/>
      },
      {
        path: '/reservarDatos/:dia/:hora',
        element: <Reservar_datos/>
      },
      {
        path: '/register',
        element: <Registro/>
      },
      {
        path: '/misReservas',
        element: <MisReservas/>
      },

    ]
  },
  {
    path : '/carta',
    element: <Carta/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <AppLayout />
    </React.StrictMode>
  </RouterProvider >

)
