import React from 'react'
import '../../styles/navbar.css'
import projectLogo from '../../assets/images/project-logo.png'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'


export default function View(props) {
  const { handleMenu, menuClicked, setFocus } = props

  const Links = <div className={menuClicked ? 'nav-links nav-active' : 'nav-links'}>
    <Link to='/' className='link' onClick={setFocus}>Home</Link>
    <Link to='/' className='link' onClick={setFocus}>About</Link>
    <Link to='/' className='link' onClick={setFocus}>Login</Link>
    <Link to='/' className='link' onClick={setFocus}>Sign-up</Link>
  </div>

  return (
    <Container fluid className='navbar-container'>
      <Row className="d-flex justify-content-between">
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

    // <div className='navbar-container'>
    //   <div className='logo-container'>
    //     <img src={projectLogo} alt='Project Logo' className='project-logo' />
    //   </div>
    //   {Links}
    //   <div className='burger-menu' onClick={handleMenu}>
    //     <div className={menuClicked? 'line-one-clicked':'line-one'}></div>
    //     <div className={menuClicked? 'line-two-clicked':'line-two'}></div>
    //     <div className={menuClicked? 'line-three-clicked':'line-three'}></div>
    //   </div>
    // </div>