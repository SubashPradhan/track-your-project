import React, { Component } from 'react'
import { View } from './view'

class LoginBackground extends Component {

  state = {
    backgroundRef: React.createRef()
  }

  componentDidMount() {
    let childeNodes = this.state.backgroundRef.current.childNodes
    const arrayOfChildNodes = Array.from(childeNodes)
    let animationTime = 0.7

    arrayOfChildNodes.map(singleItems =>
      singleItems.style.animationDuration = `${animationTime++}s`
    )
  }

  render() {
    return (
      <div>
        <View
          backgroundRef={this.state.backgroundRef}
        />
      </div>
    )
  }
}

export default LoginBackground