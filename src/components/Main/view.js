import React from 'react'
import Home from '../Home'
import About from '../About'
import Navbar from '../Navbar'
import { Container } from 'react-bootstrap'
import '../../styles/main.css'
import OurGoals from '../OurGoals'
import Contact from '../Contact'

export const View = (props) => {
  const {
    menuClicked,
    handleClick } = props
  return <>
    <Navbar />
    <Container
      fluid
      className={menuClicked ? "main-container main-container-blur" : "main-container"}
      onClick={handleClick}
    >
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="goals">
        <OurGoals />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Container>
  </>
}
