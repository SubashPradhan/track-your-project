import React from 'react'
import '../../styles/login.css'
import {TextField, InputAdornment, Button} from '@material-ui/core';
import {AccountCircle, AlternateEmail, VpnKeyRounded, VisibilityOffRounded} from '@material-ui/icons';

export default function View() {
  return (
    <div className='login-container'>
      <form autoComplete='off' className='login-form'>
        <TextField
          className='text-field'
          label='Email'
          placeholder='Enter your email'
          variant='outlined'
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
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VisibilityOffRounded />
              </InputAdornment>
            ),
          }}
        />
        <Button>Login</Button>
      </form>
    </div>
  )
}
