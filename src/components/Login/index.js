import React, { Component } from 'react'
import View from './view'

class Login extends Component {
  state = {
    signup: null
  }

  handleClick = () => {
    this.props.history.push('/')
  }

  handleSignup = () => {
    this.setState({
      signup: true
    })
  }

  render() {
    return (
      <div>
        <View
          handleClick={this.handleClick}
          signup={this.state.signup}
          handleSignup={this.handleSignup}
        />
      </div>
    )
  }
}

export default Login