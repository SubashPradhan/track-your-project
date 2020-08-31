import React from 'react'
import '../../styles/home.css'
import { Container, Row, Col } from 'react-bootstrap'
import Background from '../Background'
import DownArrow from '../DownArrow';

export default function View() {
  return <Container fluid className="home-container">

    <Row className="home-content">
    <h1 className="home-heading">Manage Your Projects</h1>
      <Col lg={6} sm md={12}>
        <div className="introduction text-center">
          <p>
            We are here with the solution to track all your valuable time.
            </p>
          <p>
            All we have to decide is what we have to do with the time that is given to us.
            </p>
          <p className="font-weight-bold">~ J.R.R Tolkien</p>
        </div>
      </Col>

      <Col lg={6}>
        <div className="home-background">
          <Background className="icons" />
        </div>
      </Col>
    <div className="arrow-home">
      <DownArrow />
    </div>
    </Row>
  </Container>
}
