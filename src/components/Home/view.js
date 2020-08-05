import React from 'react'
import '../../styles/home.css'
import Login from '../Login'
import Navbar from '../Navbar'

export default function View() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1 className='text'>
          Manage Your Projects
      </h1>
        <Login />
      </div>
    </>
  )
}
