import React, { Component } from 'react'
import { connect } from 'react-redux'
import View from './view'

class Login extends Component {
  handleClick = () => {
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
export default connect (mapStateToProps) (Login)