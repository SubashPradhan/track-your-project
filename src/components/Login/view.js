import React from 'react'
import '../../styles/login.css'
import { TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle, VisibilityOffRounded } from '@material-ui/icons';
import { Container, Row, Col } from 'react-bootstrap';
import LoginImage from '../../assets/images/login.svg'
import ProjectLogo from '../../assets/images/project-logo.svg'
import { LightSpeed } from 'react-reveal';
import Tada from 'react-reveal/Tada';
import LoginBackground from '../LoginBackground';

export default function View(props) {
  const { handleClick } = props
  return (
    <Container fluid className="login-container">

      <div className="login-background">
        <LoginBackground />
      </div>

      <div className='project-logo-login'>
        <img src={ProjectLogo} alt="project-logo" className="img-fluid" onClick={handleClick} />
      </div>

      <Row className="login-content">
        <Col lg={6} className="img-container">
          <div className="login-img">
            <LightSpeed left>
              <img src={LoginImage} alt="Login" className="img-fluid"></img>
            </LightSpeed>
          </div>
        </Col>

        <Col lg={6} className="login-form-container">
          <form autoComplete='off' className='login-form'>

            <Tada bottom>
              <h3 className='login-header'> Login to Project Management</h3>
            </Tada>

            <TextField
              type='text'
              className='text-field'
              label='Email:'
              placeholder='Enter your email'
              variant='filled'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            >
            </TextField>
            <TextField
              type='password'
              className='text-field'
              label='Password:'
              placeholder='Enter your password'
              variant='filled'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VisibilityOffRounded />
                  </InputAdornment>
                ),
              }}
            />
            <div className="password-text">
              <p className="text-center">Forgot your password ?</p>
            </div>
            <button className='login-submit'>Login</button>
          </form>
        </Col>
      </Row>
    </Container>
  )
}
