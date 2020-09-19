import React, { Component } from 'react'
import { View } from './view'

class LoginBackground extends Component {

  state = {
    backgroundRef: React.createRef()
  }

  componentDidMount() {
    let anArray = this.state.backgroundRef.current.childNodes
    const newArray = Array.from(anArray)
    let animationTime = 0.7

    newArray.map(singleItems =>
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