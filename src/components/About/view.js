import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AboutImg from '../../assets/images/research.svg'
import '../../styles/about.css'
import { Flip, Fade } from 'react-reveal';
import DownArrow from '../DownArrow'

const View = () => {
  return <>
    <Container fluid className="about-container">
      <Row className="about-content">
        <h2 className="about-heading text-center">About us</h2>
        <Col className="about-img" sm md={12} lg={6}>
          <Flip left>
            <img src={AboutImg} alt="About" className="img-fluid" />
          </Flip>
        </Col>
        <Col lg={6}>
          <Fade right>
            <div className='about-text text-center'>
              <p>
                We are a startup company based in Amsterdam, Netherlands with great value for the time and hard work.
            </p>
              <p>
                We value our customer's time and have created this powerful project management software to track all your working hours and ensure all your hardship is well tracked.
            </p>
              <p>
                Founded in 2020, this software is built specially for freelancers and independent contractors who have to keep track of their own working-hours, we are here to make that easier for everyone.
            </p>
            </div>
          </Fade>
        </Col>
        <div className="arrow-about">
          <DownArrow />
        </div>
      </Row>
    </Container>
  </>
}

export default View