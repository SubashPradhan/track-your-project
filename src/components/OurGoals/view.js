import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Person from '../../assets/images/person.svg'
import Time from '../../assets/images/time.svg'
import Money from '../../assets/images/money.svg'
import { Fade, Zoom } from 'react-reveal'
import '../../styles/goals.css'

export const View = () => {
  return (
    <Container fluid className="goals-container">
      <Row className="our-goals">
        <h2 className="goals-heading text-center">Our Goals</h2>
        <Col lg={4}>
          <Fade left>
            <div className="goals-content">
              <h5 className="goals-content-heading">Work Hard</h5>
              <img className="img-fluid" src={Person} alt="Working Person" />
              <p>Stop Doubting yourself, work hard and make it happen...</p>
              <p>
                Life is all about working, it doesn't matter what you do,
                work has become part of human life since the last decades.
                We want everyone to have easy access to keep
                track of their work by themselves.
          </p>
            </div>
          </Fade>
        </Col>

        <Col lg={4}>
          <Zoom>
            <div className="goals-content">
              <h5 className="goals-content-heading">Save Time</h5>
              <img className="img-fluid" src={Time} alt="Time" />
              <p>People who have fully prepared always save time...</p>
              <p>
                Make habit of recording your working hours, at the end of the day
                you can treat yourself for how long and hard you have been working.
                We understand no job is easy. With our Project-management tool
                you can easily get used to these healthy habits.
          </p>
            </div>
          </Zoom>
        </Col>

        <Col lg={4}>
          <Fade right>
            <div className="goals-content">
              <h5 className="goals-content-heading">Save Money</h5>
              <img className="img-fluid" src={Money} alt="Money icon" />
              <p>Time is money says the proverb, but turn it around and you get a precious truth...</p>
              <p>
                Have you ever lost track of the time or the timer stopped working or the tool is having issues
                and has lost working hours? Losing hours because of weak tools can be painful causing you
                loss of your money. With our tool you will never have to lose your hours and neither money.
          </p>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container >
  )
}
