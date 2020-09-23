import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle, VisibilityOffRounded } from '@material-ui/icons';
import Tada from 'react-reveal/Tada';
import { Link } from 'react-router-dom'
import GoogleIcon from '../../assets/images/google.svg'
import FaceBookIcon from '../../assets/images/facebook.svg'
import ProfileIcon from '../../assets/images/profile.svg'
import '../../styles/loginForm.css'

export const View = (props) => {
  const { handleSignup } = props
  return (
    <div>
      <form autoComplete='off' className='login-form'>

        <Tada bottom>
          <h3 className='login-header'> Login to Project Management</h3>
        </Tada>

        <div className="profile-icon">
          <img src={ProfileIcon} alt="profile-icon" className="img-fluid" />
        </div>

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

        <div className="social-login">
          Or login with
        </div>
        <div className="login-icons">
          <img src={FaceBookIcon} alt="facebook-icon" />
          <img src={GoogleIcon} alt="google-icon" />
        </div>

        <div className='signup-text'>
          <p>Don't have an account ?
          <Link onClick={handleSignup}>Signup</Link>
          </p>
        </div>
      </form>
    </div>
  )
}
