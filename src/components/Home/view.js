import React from 'react'
import '../../styles/home.css'
import Navbar from '../Navbar'
import { Container, Row, Col } from 'react-bootstrap'
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Background from '../Background'
import About from '../About'

export default function View(props) {
  const { menuClicked } = props
  return <>
    <Container fluid className="home-container">
      <Navbar />
      <h1 className={menuClicked ? "home-heading home-heading-blur" : "home-heading"}>Manage Your Projects</h1>
      <Row className={menuClicked ? "container-blur" : "blur-background"}>
        <Col lg={6} sm md={12}>
          <div className="introduction text-center">
            <p>
              Time is precious
            </p>
            <p>  
              We are here with the solution to track all your valuable time.
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <div className="background-home">
            <Background className="icons img-fluid" />
          </div>
        </Col>
      </Row>
      {/* <ArrowDownwardIcon style={{ fontSize: '3.5rem' }} className='down-arrow' /> */}
    </Container>
    <About />
  </>
}
