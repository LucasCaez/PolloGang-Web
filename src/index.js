import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import PageNotFound from './paginas/404';

const router = createBrowserRouter([
  { path: "/", element: <App /> },

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
