import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AboutImg from '../../assets/images/research.svg'
import '../../styles/about.css'

const View = () => {
  return <>
    <Container fluid className="about">
    <h2 align='center'>About Us</h2>
      <Row>
        <Col className="about-img">
          <img src={AboutImg} alt="About Image" />
        </Col>
        <Col>
        <p className='about-text text-center'>
          This app is specialized in tracking time of your work.
          As a freelancer working on various projects,
          it can be difficult sometimes to keep track of the times.
          Which can be confusing resulting lost of your work and money.
          So, to come up with a digital solution, I came up with this app Project Management.
          This app allows you to register various projects that you are working on and allows
          you to keep daily records of the hours you work per day.
          The hours can be entered maunally per projects and per day.
        </p>
        </Col>
      </Row>
    </Container>
  </>
}

export default View