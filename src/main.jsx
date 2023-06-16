import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Ejercicio from './pages/Ejercicio.jsx'
import Seleccion from './pages/Seleccion.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([{
  path: '/',
  element: <App />,
},{
  path: '/ejercicio',
  element: <Ejercicio />,
},{
  path: '/seleccion',
  element: <Seleccion/>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
) 