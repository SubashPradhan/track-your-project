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
              Are you a freelancer ?
            </p>
            <p>
              Looking to track your time ?
            </p>
            <p>
              Do you want to save all the works you did ? Why Not ?
            </p>
            <p>
              Then you are at the right place. We make it easy for you to track your hard works all the time.
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
