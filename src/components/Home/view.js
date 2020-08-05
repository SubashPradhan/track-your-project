import React from 'react'
import '../../styles/home.css'
import Login from '../Login'
import Navbar from '../Navbar'

export default function View() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className='text'>
          Manage <i>Your</i> Projects
      </div>
        <Login />
      </div>
    </>
  )
}
