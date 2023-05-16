import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Menu from "./Menupag.jsx";
import Dadospag from "./Dados.jsx";
import Docpag from "./Doc.jsx";

const router = createBrowserRouter([

  {
    path:"/",
    element: <App />,
  },
  {
    path:"Menu",
    element: <Menu />,
  },
  {
    path:"Dadospag",
    element: <Dadospag/>,
  },
  {
    path:"Docpag",
    element: <Docpag/>
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
