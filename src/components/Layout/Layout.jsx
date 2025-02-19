import React, { useState } from 'react'
import classes from './Layout.module.scss'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './../Footer/Footer';


export default function Layout() {
  return (
    <div className={`${classes.Layout} flex flex-col min-h-screen`}>
      <Navbar/>
      <main className={`${classes.Layout} flex-grow`}>
      <Outlet />
    </main>
    <Footer/>
    </div>
  )
}
