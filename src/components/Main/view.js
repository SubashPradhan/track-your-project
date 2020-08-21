import React from 'react'
import Home from '../Home'
import About from '../About'
import Navbar from '../Navbar'
import { Container } from 'react-bootstrap'
import '../../styles/main.css'

export const View = () => {
  return (
    <Container fluid className="main-container">
      <Navbar />
      <Home />
      <About />
    </Container>
  )
}
