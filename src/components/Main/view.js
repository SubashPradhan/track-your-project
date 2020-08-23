import React from 'react'
import Home from '../Home'
import About from '../About'
import Navbar from '../Navbar'
import { Container } from 'react-bootstrap'
import '../../styles/main.css'

export const View = (props) => {
  const { menuClicked } = props
  return<>
      <Navbar />
      <Container fluid className={menuClicked ? "main-container main-container-blur" : "main-container"}>
        <Home />
        <About />
      </Container>
    </>
}
