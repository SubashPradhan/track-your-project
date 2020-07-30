import React from 'react'
import '../../styles/home.css'
import Login from '../Login'

export default function View() {
  return (
    <div className="home-container">
      <div className='text'>
          Manage <i>Your</i> Projects
      </div>
      <Login />
    </div>
  )
}
