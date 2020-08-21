import React from 'react'
import '../../styles/home.css'
import Navbar from '../Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Background from '../Background'
import About from '../About'

export default function View(props) {
  const { menuClicked, scrollDown } = props
  return <>
    <Container fluid className="home-container">
    <Navbar/>
      <h1 className={menuClicked ? "home-heading home-heading-blur" : "home-heading"}>Manage Your Projects</h1>
      <Row className={menuClicked ? "home-content home-content-blur" : "home-content"}>
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
        <Col lg={6} className>
          <div className="home-background">
            <Background className="icons" />
          </div>
        </Col>
      </Row>
      <ArrowDownwardIcon style={{ fontSize: '3.5rem' }} className='down-arrow' onClick={scrollDown} />
    </Container>
    <About />
  </>
}
