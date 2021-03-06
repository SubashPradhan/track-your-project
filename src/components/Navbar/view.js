import React from 'react'
import '../../styles/navbar.css'
import projectLogo from '../../assets/images/project-logo.svg'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function View(props) {
  const { handleMenu, menuClicked, setFocus, scrollNav } = props

  const Links = <div className={menuClicked ? 'nav-links nav-active' : 'nav-links'}>
    <a href="#home" className='link' onClick={setFocus}>Home</a>
    <a href="#about" className='link' onClick={setFocus}>About</a>
    <a href="#goals" className='link' onClick={setFocus}>Our Goals</a>
    <a href="#contact" className='link' onClick={setFocus}>Contact</a>
    <a href="/login" className={'link'} onClick={setFocus}>Login</a>
  </div>

  return (
    <Container fluid className={scrollNav && !menuClicked ? 'navbar-container navbar-container-background' : 'navbar-container'}>
      <Row className="justify-content-between">
        <div className='logo-container'>
          <img src={projectLogo} alt='Project Logo' className={scrollNav ? 'project-logo project-logo-resize' : 'project-logo'} />
        </div>
        {Links}
        <div className='burger-menu' onClick={handleMenu}>
          <div className={menuClicked ? 'line-one-clicked' : 'line-one'}></div>
          <div className={menuClicked ? 'line-two-clicked' : 'line-two'}></div>
          <div className={menuClicked ? 'line-three-clicked' : 'line-three'}></div>
        </div>
      </Row>
      <div className={menuClicked || scrollNav ? 'hide' : 'login-button'}>
        <Link to='/login' className="login-link">Login</Link>
      </div>
    </Container>
  )
}
