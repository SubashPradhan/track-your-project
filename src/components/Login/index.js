import React, { Component } from 'react'
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
        />
      </div>
    )
  }
}

export default Login