import React from 'react'
import '../../styles/home.css'
import Login from '../Login'
import Navbar from '../Navbar'

export default function View(props) {
  const {menuClicked} = props
  return (
    <>
      <Navbar />
      <div className={!menuClicked ? "home-container" : "home-container home-container-blur"}>
        <h1 className='text'>
          Manage Your Projects
      </h1>
        <Login />
      </div>
    </>
  )
}
