import React from 'react';
import {router} from "./route.jsx"
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
