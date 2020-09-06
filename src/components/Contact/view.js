import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactImage from '../../assets/images/contact.svg'
import '../../styles/contact.css'
import { Fade } from 'react-reveal'

export const View = (props) => {
  const {
    handleInput,
    isName,
    isEmail,
    isSubject,
    handleFocus,
    handleFocusOut,
    value
  } = props

  const { name, email, subject } = value
  return (
    <Container className="contact-container" fluid>
      <Row className="contact-content">
        <h2 className="text-center contact-heading">Connect With us.</h2>
        <Col lg={6}>
          <h3 className="form-heading text-center">We'd <span role="img" aria-label="heart">❤️</span> to hear from you.</h3>

          <Fade left>
            <form className="contact-form" autoComplete="off">
              <div className="field">
                <input
                  id="name"
                  value={name}
                  onChange={(e) => handleInput(e, 'name')}
                  onFocus={handleFocus}
                  onBlur={handleFocusOut}
                  className="contact-input" />
                <label className={isName ? "placeholder-label placeholder-label-resize" : "placeholder-label"}>Your Full Name</label>
              </div>

              <div className="field">
                <input
                  id="email"
                  value={email}
                  onChange={(e) => handleInput(e, 'email')}
                  onFocus={handleFocus}
                  onBlur={handleFocusOut}
                  className="contact-input" />
                <label className={isEmail ? "placeholder-label placeholder-label-resize" : "placeholder-label"}>Your Email</label>
              </div>

              <div className="field">
                <input
                  id="subject"
                  value={subject}
                  onChange={(e) => handleInput(e, 'subject')}
                  onFocus={handleFocus}
                  onBlur={handleFocusOut}
                  className="contact-input" />
                <label className={isSubject ? "placeholder-label placeholder-label-resize" : "placeholder-label"}>Subject</label>
              </div>

              <div className="mt-5">
                <label>Your valuable message matters:</label>
                <textarea className="contact-text-area" placeholder="Your feedbacks." />
              </div>
              <button>Submit</button>
            </form>
          </Fade>
        </Col>

        <Col lg={6}>
          <Fade right>
            <img src={ContactImage} alt="Contact pic" className="img-fluid" />
          </Fade>
        </Col>
      </Row>
    </Container >
  )
}
