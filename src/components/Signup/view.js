import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle, VisibilityOffRounded } from '@material-ui/icons';
import '../../styles/signup.css'

export const View = () => {
  return (
    <form autoComplete='off' className='signup-form'>

      <h3 className='login-header'>Create a new Account</h3>
      <div className='text-field-signup'>
        <TextField
          type='text'
          className='text-field'
          label='First Name:'
          placeholder='Enter your First Name'
          variant='filled'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          type='text'
          className='text-field'
          label='Last Name:'
          placeholder='Enter your Last Name'
          variant='filled'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <TextField
        type='text'
        className='text-field'
        label='Email: '
        placeholder='Enter your Email'
        variant='filled'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />

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

      <TextField
        type='password'
        className='text-field'
        label='Confirm Password:'
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

      <button className='login-submit'>Signup</button>

    </form>
  )
}
