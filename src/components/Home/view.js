import React from 'react'
import '../../styles/home.css'
import Login from '../Login'
import Navbar from '../Navbar'
import ProjectImg from '../../assets/images/computer.jpg'
import { Container, Row, Col } from 'react-bootstrap'

export default function View(props) {
  const { menuClicked } = props
  return (
    <Container fluid className="home-container">
      <Navbar />
      <Row className={menuClicked ? "container-blur" : "blur-background"}>
        <Col className="header">
          <h1>Manage Your Projects</h1>
          <div className="introduction">
            <p>
              Looking to track your time ?
            </p>
            <p>
              Are you a freelancer working various projects/jobs ?
            </p>
            <p>
              Do you want to save all the works you did, make sure you can
            </p>
          </div>
        </Col>
        <Col>
          Hello
            {/* <Login /> */}
        </Col>
      </Row>
    </Container>
  )
}
