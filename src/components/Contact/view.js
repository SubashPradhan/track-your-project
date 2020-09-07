import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactImage from '../../assets/images/contact.svg'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Fade, Roll } from 'react-reveal'
import '../../styles/contact.css'

export const View = (props) => {
  const {
    handleInput,
    isName,
    isEmail,
    isSubject,
    handleFocus,
    handleFocusOut,
    handleSubmit,
    value,
    error,
    successMsg
  } = props

  const { name, email, subject, message } = value
  return (
    <Container className="contact-container" fluid>
      <Row className="contact-content">
        <h2 className="text-center contact-heading">Connect With us</h2>
        <Col lg={6}>
          {
            successMsg ? <Roll bottom><h3 className="form-heading">{successMsg}</h3></Roll> :
              <h3 className="form-heading text-center">We'd <span role="img" aria-label="heart">❤️</span> to hear from you.</h3>
          }
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
              {error ? <Fade bottom>
                <div className='error'>
                  {error}
                </div>
              </Fade> : null}

              <div className="mt-5">
                <label>Your valuable message matters:</label>
                <textarea
                  value={message}
                  onChange={(e) => handleInput(e, 'message')}
                  className="contact-text-area"
                  placeholder="Your feedbacks." />
              </div>
              <button onClick={handleSubmit}>Submit</button>
            </form>
          </Fade>
        </Col>

        <Col lg={6}>
          <h3 className="social-heading">Join us @</h3>
          <div className="social">
            <div className="social-icon">
              <FacebookIcon fontSize='large' id="fb-icon" />
              <p className="icon-tag">facebook</p>
            </div>
            <div className="social-icon">
              <InstagramIcon fontSize='large' id="insta-icon" />
              <p className="icon-tag">Instagram</p>
            </div>
            <div className="social-icon">
              <TwitterIcon fontSize='large' id="twitter-icon" />
              <p className="icon-tag">Twitter</p>
            </div>
          </div>
          <Fade right>
            <img src={ContactImage} alt="Contact pic" className="img-fluid" />
          </Fade>
        </Col>
      </Row>
    </Container >
  )
}
