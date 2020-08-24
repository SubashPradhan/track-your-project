import React, { Component } from 'react'
import { View } from './view'

export default class DownArrow extends Component {

  state = {
    amountToScroll: 0
  }

  scrollDown = async () => {
    const { amountToScroll } = this.state
    await window.scroll({
      behavior: "smooth",
      top: amountToScroll + window.innerHeight
    })

    await this.setState({
      amountToScroll: window.innerHeight
    })
  }

  render() {
    return (
      <div>
        <View scrollDown={this.scrollDown} />
      </div>
    )
  }
}
