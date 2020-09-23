import React, { Component } from 'react'
import { View } from './view'
import { signupStat } from '../../actions/handleSignup'
import { connect } from 'react-redux'

class LoginForm extends Component {
  handleSignup = () => {
    this.props.signupStat()
  }

  render() {
    return (
      <div>
        <View
          handleSignup={this.handleSignup}
        />
      </div>
    )
  }
}


export default connect(null, {signupStat})(LoginForm)