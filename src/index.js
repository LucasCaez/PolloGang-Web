import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppHome from './Home';
import reportWebVitals from './reportWebVitals';
import PageNotFound from './paginas/404';
import EquipoApp from './paginas/equipo';
import FaQApp from './paginas/faq';
import FaQAppPermisos from './paginas/permisos';
import FaQAppEventos from './paginas/eventos';
import VideosApp from './paginas/videos';
import CodeApp from './paginas/codigos';

const router = createBrowserRouter([
  { path: "/", element: <AppHome /> },
  { path: "/equipo", element: <EquipoApp /> },
  { path: "/faq", element: <FaQApp /> },
  { path: "/faq/permisos", element: <FaQAppPermisos /> },
  { path: "/faq/eventos", element: <FaQAppEventos /> },
  { path: "/videos", element: <VideosApp /> },
  { path: "/codigos", element: <CodeApp /> },

  { path: "", element: <PageNotFound /> },
  { path: "*", element: <PageNotFound /> },
  { element: <PageNotFound /> },

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
