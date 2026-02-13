import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();
function App() {
  

  return (
    <>
        <CssBaseline />

    <QueryClientProvider client={queryClient}> 
      <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}

export default App
