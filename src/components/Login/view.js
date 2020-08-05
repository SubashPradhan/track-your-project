import React from 'react'
import '../../styles/login.css'
import { TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle, VisibilityOffRounded } from '@material-ui/icons';
import logo from '../../assets/images/project-logo.png';

export default function View() {
  return (
    <div>
      <div className='login-container'>
        <form autoComplete='off' className='login-form'>
          {/* <img className='project-logo' src={logo} alt='project-tracker-logo'/> */}
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
    </div>
  )
}
