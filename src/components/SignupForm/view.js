import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle, VisibilityOffRounded } from '@material-ui/icons';
import SignupProfileIcon from '../../assets/images/signup-profile.svg'
import GoogleIcon from '../../assets/images/google.svg'
import FaceBookIcon from '../../assets/images/facebook.svg'
import '../../styles/signup.css'

export const View = () => {
  return (
    <form autoComplete='off' className='signup-form'>

      <h3 className='login-header'>Create a new Account</h3>

      <div className="profile-icon">
        <img src={SignupProfileIcon} alt="profile-icon" className="img-fluid" />
      </div>

      <div className='text-field-signup'>
        <TextField
          type='text'
          className='text-field'
          label='First Name:'
          placeholder='First Name'
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
          placeholder='Last Name'
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

      <button className='login-submit signup-submit'>Signup</button>

      <div className="social-login">
        Or Sign up with
        </div>
      <div className="signup-icons">
        <img src={FaceBookIcon} alt="facebook-icon" />
        <img src={GoogleIcon} alt="google-icon" />
      </div>
    </form>
  )
}
