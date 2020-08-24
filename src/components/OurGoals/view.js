import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Person from '../../assets/images/person.svg'
import Time from '../../assets/images/time.svg'
import Money from '../../assets/images/money.svg'
import '../../styles/goals.css'

export const View = () => {
  return (
    <Container fluid className="goals-container">
      <h3 className="goals-heading">Our Goals.</h3>
      <Row className="our-goals">
        <Col lg={3} className="goals-content">
          <img className="img-fluid" src={Person} alt="Working Person" />
          <h4 className="goals-content-heading">Hard Work</h4>
        </Col>
        <Col lg={3} className="goals-content">
          <img className="img-fluid" src={Time} alt="Time" />
          <h4 className="goals-content-heading">Time</h4>
        </Col>
        <Col lg={3} className="goals-content">
          <img className="img-fluid" src={Money} alt="Money icon" />
          <h4 className="goals-content-heading">Money</h4>
        </Col>
      </Row>
    </Container>
  )
}
