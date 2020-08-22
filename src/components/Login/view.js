import React from 'react'
import '../../styles/login.css'
import { TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle, VisibilityOffRounded } from '@material-ui/icons';
import { Container} from 'react-bootstrap';

export default function View() {
  return (
    <Container fluid>
      <div className='login-container'>
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
          <button className='login-button'>Login</button>
        </form>
      </div>
    </Container>
  )
}
