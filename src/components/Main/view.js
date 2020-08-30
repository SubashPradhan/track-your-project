import React from 'react'
import Home from '../Home'
import About from '../About'
import Navbar from '../Navbar'
import { Container } from 'react-bootstrap'
import '../../styles/main.css'
import OurGoals from '../OurGoals'

export const View = (props) => {
  const { menuClicked, aboutRef, homeRef, goalsRef, handleClick } = props
  return <>
    <Navbar />
    <Container
      fluid
      className={menuClicked ? "main-container main-container-blur" : "main-container"}
      onClick={handleClick}
    >
      <section ref={homeRef}>
        <Home />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={goalsRef}>
        <OurGoals />
      </section>
    </Container>
  </>
}
