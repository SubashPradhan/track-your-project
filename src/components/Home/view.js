import React from 'react'
import '../../styles/home.css'
import Login from '../Login'
import Navbar from '../Navbar'
import ProjectImg from '../../assets/images/computer.jpg'
import { Container, Row, Col } from 'react-bootstrap'

export default function View(props) {
  const { menuClicked } = props
  return (
    <>
      <Navbar />
      <Container fluid className="home-container">
        <Row className={menuClicked ? "container-blur" : "blur-background"}>
          <Col className="header"lg={12}>
            <h1>Manage Your Projects</h1>
          </Col>
          <Col>
            <Login />
          </Col>
        </Row>
      </Container>
    </>
  )
}
