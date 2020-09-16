import React from 'react'
import '../../styles/login.css'
import { TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle, VisibilityOffRounded } from '@material-ui/icons';
import { Container, Row, Col } from 'react-bootstrap';
import LoginImage from '../../assets/images/login.svg'

export default function View() {
  return (
    <Container fluid >
      <Row className="login-container">
        <Col lg={5} className="login-form-container">
          <div className="wave">
            <div className='login-form-text'>
              <h3 className='login-header text-center'>
                Login to Project Management
              </h3>
            </div>
            <form autoComplete='off' className='login-form'>
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
              <button className='login-submit'>Login</button>
            </form>
          </div>
        </Col>

        <Col lg={7} className="img-container">
          <div className="login-img">
            <img src={LoginImage} alt="Login" className="img-fluid"></img>
          </div>
        </Col>

      </Row>
    </Container>
  )
}
