import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import { Container } from '@mui/material'

export default function Mainlayout() {
    return (
        <>
            <Navbar />
            
            
                <Outlet />
            
            <Footer />
        </>
    )
}
