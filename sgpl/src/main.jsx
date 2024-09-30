import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Inicial from './Components/Inicial.jsx'
import Login from'./Components/Pages/Login.jsx'
import Devolucoes from './Components/Pages/Devolucoes.jsx'
import Solicitacoes from './Components/Pages/Solicitacoes'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Inicial",
        element: <Inicial />
      },
      {
        path: "/Devolucoes",
        element: <Devolucoes />
      },
      {
        path: "/Solicitacoes",
        element: <Solicitacoes />
      },
      
    ]
  },

  {
    path: "/Login",
    element: <Login />
  },

]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
    </React.StrictMode>,
)
