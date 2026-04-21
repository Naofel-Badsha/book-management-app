import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'

const RootLayouts = () => {
  return (
<main>
    <Navbar />
    <Outlet />
    <Footer />
</main>
  )
}

export default RootLayouts
