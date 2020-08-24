import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Person from '../../assets/images/person.svg'
import Time from '../../assets/images/time.svg'
import Money from '../../assets/images/money.svg'
import '../../styles/goals.css'

export const View = () => {
  return (
    <Container fluid className="goals-container">
      <h2 className="goals-heading">Our Goals</h2>
      <Row className="our-goals">
        <Col lg={3} className="goals-content">
          <h5 className="goals-content-heading">Work Hard</h5>
          <img className="img-fluid" src={Person} alt="Working Person" />
          <p>Stop Doubting yourself, work hard and make it happen...</p>
          <p>
            Life is all about working, it doesn't matter what you do,
            work has become part of the human life since last decades.
            We want everyone to have easy access to keep 
            track of their work by themselves.
          </p>
        </Col>
        <Col lg={3} className="goals-content">
          <h5 className="goals-content-heading">Save Time</h5>
          <img className="img-fluid" src={Time} alt="Time" />
          <p>People who have fully prepared always save time...</p>
          <p>
            Make habit of recording your working hours, at the end of the day
            you can treat yourself for how long and hard you have been working.
            We understand no job is easy. And you can do that with ease with our 
            Project management tool.
          </p>
        </Col>
        <Col lg={3} className="goals-content">
          <h5 className="goals-content-heading">Save Money</h5>
          <img className="img-fluid" src={Money} alt="Money icon" />
          <p>Time is money says the proverb, but turn it around and you get a precious truth...</p>
          <p>
            Have you ever lost track of the time or the timer stopped working or the tool is having issue
            and has lost working hours? Losing hours because of weak tools can be painful causing you
            loss of your money. With our tool you will never have to loose your hours and neither money.
          </p>
        </Col>
      </Row>
    </Container>
  )
}
