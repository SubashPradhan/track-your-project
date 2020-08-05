import React from 'react'
import '../../styles/navbar.css'
import projectLogo from '../../assets/images/project-logo.png'
import { Link } from 'react-router-dom'

export default function View(props) {
  const { handleMenu, menuClicked } = props
  const Links = [<div className={menuClicked ? 'nav-links nav-active' : 'nav-links'}>
    <Link to='/' className='link'>Home</Link>
    <Link to='/' className='link'>About</Link>
    <Link to='/' className='link'>Login</Link>
    <Link to='/' className='link'>Sign-up</Link>
  </div>]

  return (
    <div className='navbar-container'>
      <div className='logo-container'>
        <img src={projectLogo} alt='Project Logo' className='project-logo' />
      </div>
      {Links}
      <div className='burger-menu' onClick={handleMenu}>
        <div className={menuClicked? 'line-one-clicked':'line-one'}></div>
        <div className={menuClicked? 'line-two-clicked':'line-two'}></div>
        <div className={menuClicked? 'line-three-clicked':'line-three'}></div>
      </div>
    </div>
  )
}
