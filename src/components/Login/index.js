import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signupStat } from '../../actions/handleSignup'
import View from './view'

class Login extends Component {
  handleClick = () => {
    this.props.signupStat()
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <View
          handleClick={this.handleClick}
          signup={this.props.signup}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    signup: state.signup
  }
}
export default connect (mapStateToProps, {signupStat}) (Login)