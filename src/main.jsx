import React from 'react'
import ReactDOM from 'react-dom/client'
import "react-toastify/dist/ReactToastify.css";
import './index.css'
 import { ToastContainer } from "react-toastify";

import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes';
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from './Provider/AuthProvider';
import { 
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";



const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ToastContainer> </ToastContainer>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.Fragment>
);
