import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Footer from './container/Footer/Footer';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { Navbar,FooterOverlay} from './components';
import Login from './pages/Login';
import ReservarCalendar from './pages/Reservar_calendario';
import ReservarDatos from './pages/Reservar_datos';
import Registro from './pages/Registro';


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
        element: <ReservarCalendar/>
      },
      {
        path: '/reservarDatos/:dia/:hora',
        element: <ReservarDatos/>
      },
      {
        path: '/register',
        element: <Registro/>
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
