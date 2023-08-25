import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListadoEjercicios from './pages/ListadoEjercicios'
import './index.css'
import Ejercicio from './pages/Ejercicio.jsx'
import Seleccion from './Seleccion'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Simuladores from './pages/Simuladores.jsx'
import Login from './pages/Login'

const routes = createBrowserRouter([{
  path: '/seleccion',
  element: <Seleccion/>
},{
  path: '/listadoEjercicios',
  element: <ListadoEjercicios/>,
},{
  path: '/ejercicio',
  element: <Ejercicio />,
},{
  path: '/simuladores',
  element: <Simuladores/>
},{
  path: '/',
  element: <Login/>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
) 