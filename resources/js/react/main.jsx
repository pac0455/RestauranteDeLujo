import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import {
  Navbar,
  FooterOverlay,
  Footer,
} from './components';
import {
  Reservar_datos,
  Reservar_calendario,
  Registro,MisReservas,
  FormTarjetasCredito,
  Login,
  Home,
  MisTarjetas,
  MenuQR
} from './pages/';
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
      {
        path: '/addTarjeta',
        element: <FormTarjetasCredito/>
      },
      {
        path: '/misTarjetas',
        element: <MisTarjetas/>
      },
      {
        path : '/carta',
        element: <MenuQR/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <AppLayout />
    </React.StrictMode>
  </RouterProvider >

)
