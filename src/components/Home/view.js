import React from 'react'
import '../../styles/home.css'
import Navbar from '../Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Background from '../Background'
import About from '../About'

export default function View(props) {
  const { menuClicked } = props
  return <>
    <Container fluid className="home-container">
      <Navbar />
      <h1>Manage Your Projects</h1>
      <Row className={menuClicked ? "container-blur" : "blur-background"}>
        <Col className="header" lg={6} sm md={12}>
          <div className="introduction text-center">
            <p>Are you a freelancer ?</p>
            <p>Looking to track your time ?</p>
            <p>Looking to track all the hard works you did ?</p>
            <p>
              Then you are at the right place. We make it easy for you to track all your hard works
              and make sure that you don't miss a penny.
            </p>
            <p>Want to know more about us keep scrolling...</p>
          </div>
        </Col>
        <Col lg={6}>
          <div className="background-home">
            <Background className="icons" />
          </div>
        </Col>
      </Row>
      <ArrowDownwardIcon style={{ fontSize: '3.5rem' }} className='down-arrow' />
    </Container>
    <About />
    </>
}
