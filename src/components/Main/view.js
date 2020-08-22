import React from 'react'
import Home from '../Home'
import About from '../About'
import Navbar from '../Navbar'
import Login from '../Login'
import { Container } from 'react-bootstrap'
import '../../styles/main.css'

export const View = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="main-container">
        <Home />
        <About />
        <Login />
      </Container>
    </>
  )
}
