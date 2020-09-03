import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactImage from '../../assets/images/contact.svg'
import '../../styles/contact.css'

export const View = () => {
  return (
    <Container className="contact-container">
      <Row>
        <h2 className="text-center contact-heading">Connect With us.</h2>
        <Col lg={6}>
          <h3 className="form-heading text-center">We'd <span role="img" aria-label="heart">❤️</span> to hear from you.</h3>
          <form className="contact-form">
            <div className="field">
              <label>Full Name:</label>
              <label className="placeholder-label">Your Full Name</label>
              <input className="contact-input"/>
            </div>

            <div className="field">
              <label>Email:</label>
              <input className="contact-input" placeholder="Your email." />
            </div>

            <div className="field">
              <label>Subject:</label>
              <input className="contact-input" placeholder="Subject." />
            </div>

            <div className="field mt-4">
              <label>Your valuable message matters:</label>
              <textarea className="contact-text-area" placeholder="Your valuable message." />
            </div>
            <button>Submit</button>
          </form>
        </Col>
        <Col lg={6}>
          <img src={ContactImage} alt="Contact pic" className="img-fluid" />
        </Col>
      </Row>
    </Container >
  )
}
