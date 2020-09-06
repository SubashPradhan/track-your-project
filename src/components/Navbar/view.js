import React from 'react'
import '../../styles/navbar.css'
import projectLogo from '../../assets/images/project-logo.png'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

export default function View(props) {
  const { handleMenu, menuClicked, setFocus, scrollNav} = props

  const Links = <div className={menuClicked ? 'nav-links nav-active' : 'nav-links'}>
    <Link to='#home' id="home" className='link' onClick={setFocus}>Home</Link>
    <Link to='#about' id="about" className='link' onClick={setFocus}>About</Link>
    <Link to='#goals' id="goals" className='link' onClick={setFocus}>Our Goals</Link>
    <Link to='#contact' id="contact" className='link' onClick={setFocus}>Contact</Link>
  </div>

  return (
    <Container fluid className={ scrollNav ? 'navbar-container navbar-container-background' : 'navbar-container'}>
      <Row className="justify-content-between">
        <div className='logo-container'>
          <img src={projectLogo} alt='Project Logo' className='project-logo' />
        </div>
        {Links}
        <div className='burger-menu' onClick={handleMenu}>
          <div className={menuClicked ? 'line-one-clicked' : 'line-one'}></div>
          <div className={menuClicked ? 'line-two-clicked' : 'line-two'}></div>
          <div className={menuClicked ? 'line-three-clicked' : 'line-three'}></div>
        </div>
      </Row>
    </Container>
  )
}
