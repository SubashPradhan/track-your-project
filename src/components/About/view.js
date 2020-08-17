import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const View = () => {
  return <>
    <Container fluid style={{ background: 'red' }}>
    <h2 align='center'>What We Do</h2>
      <Row>
        <Col>
        </Col>
        <Col>
        <p className='about-text'>
          This app is specialized in tracking time of your work.
          As a freelancer myself, I have been working on various projects.
          Sometimes it can be difficult to keep track of times for all the different projects.
          Which can be confusing resulting lost of your work and money.
          So, to come up with adigital solution, I came up with this app Project Management.
          This app allows you to register various projects that you are working on and allows
          you to keep daily records of the hours you work per day.
          The hours can be entered maunally per projects and per day.
        </p>
        </Col>
      </Row>
    </Container>
  </>
}

export default View