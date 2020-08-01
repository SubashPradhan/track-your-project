import React from 'react'
import '../../styles/login.css'
import { TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle, VisibilityOffRounded } from '@material-ui/icons';

export default function View() {
  return (
    <div className='login-container'>
      <form autoComplete='off' className='login-form'>
        <TextField
          className='text-field'
          label='Email'
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
          label='Password'
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
  )
}
