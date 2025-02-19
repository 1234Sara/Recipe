import React, { useState } from 'react'
import classes from './Navbar.module.scss'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function Navbar() {

  const [toggle, setIsToggle] = useState(false);


  return (
    // <div className={`${classes.bg} text-orange-600`}>hello sssss</div>
    <>    
  <div className=''>
  <button onClick={() => setIsToggle(!toggle)}  data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span className="sr-only">Open sidebar</span>
    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
    </svg>
  </button>
  
        {toggle && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 sm:hidden"
            onClick={() => setIsToggle(false)} // Close sidebar when clicking outside
          />
        )}
  <aside id="cta-button-sidebar" className={`${toggle ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0`} aria-label="Sidebar">
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <div className="flex justify-center mb-4">
        <img src={logo} alt="Logo" className="w-auto" />
      </div>
      <ul className="space-y-2 font-medium group">
        <li className=''>
          <Link to="/" className="flex items-center p-2 hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all mb-6 rounded-xl text-lg shadow-lg shadow-orange-300 font-semibold bg-orange-400 text-white">
            <div className='flex justify-center items-center mx-4'>
            <i className="fa-solid fa-utensils"></i>
            <span className="ms-3">Meals</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group border hover:shadow-lg hover:scale-105">
          <div className='flex justify-center items-center mx-4'>
            <i className="fa-solid fa-utensils"></i>
            <span className="ms-3">Ingredients</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group border hover:shadow-lg hover:scale-105">
          <div className='flex justify-center items-center mx-4'>
            <i className="fa-solid fa-utensils"></i>
            <span className="ms-3">Area</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </aside>
</div>


    </>
    
  )
}



