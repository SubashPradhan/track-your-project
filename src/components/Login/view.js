import React from 'react'
import '../../styles/login.css'
import { TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle, VisibilityOffRounded } from '@material-ui/icons';
import { Container, Row, Col } from 'react-bootstrap';
import LoginImage from '../../assets/images/login.svg'
import ProjectLogo from '../../assets/images/project-logo.svg'

export default function View(props) {
  const { handleClick } = props
  return (
    <Container fluid className="login-container">
      <div className='project-logo-login'>
        <img src={ProjectLogo} alt="project-logo" className="img-fluid" onClick={handleClick} />
      </div>
      <Row className="login-content">
        <Col lg={6} className="img-container">
          <div className="login-img">
            <img src={LoginImage} alt="Login" className="img-fluid"></img>
          </div>
        </Col>

        <Col lg={6} className="login-form-container">
          <form autoComplete='off' className='login-form'>
            <h3 className='login-header'> Login to Project Management</h3>
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
          {/* </div> */}
        </Col>
      </Row>
    </Container>
  )
}
