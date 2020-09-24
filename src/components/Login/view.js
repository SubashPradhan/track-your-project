import React from 'react'
import '../../styles/login.css'
import { Container, Row, Col } from 'react-bootstrap';
import LoginImage from '../../assets/images/login.svg'
import ProjectLogo from '../../assets/images/project-logo.svg'
import { LightSpeed } from 'react-reveal';
import LoginBackground from '../LoginBackground';
import SignupForm from '../SignupForm'
import LoginForm from '../LoginForm'

export default function View(props) {
  const { handleClick, signup } = props

  return (
    <Container fluid className="login-container">

      <div className="login-background">
        <LoginBackground />
      </div>

      <div className="project-logo-login">
        <img src={ProjectLogo} alt="project-logo" className="img-fluid" onClick={handleClick} />
      </div>

      <Row className="login-content">

        <Col className={signup ? 'signup-form-flip signup-form-container' : 'hide'}>
          <SignupForm />
        </Col>

        <Col lg={6} className="img-container">
          <div className={signup ? "fade-in" : "login-img"}>
            <LightSpeed left>
              <img src={LoginImage} alt="Login" className="img-fluid"></img>
            </LightSpeed>
          </div>
        </Col>

        <Col lg={6} className={signup ? "hide" : "login-form-container"}>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  )
}
