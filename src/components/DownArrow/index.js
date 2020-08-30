import React, { Component } from 'react'
import { View } from './view'

export default class DownArrow extends Component {

  state = {
    amountToScroll: window.innerHeight
  }

  scrollDown = async () => {
    console.log(window.pageYOffset)
    console.log("Inner", window.innerHeight)
    const { amountToScroll } = this.state
    await window.scroll({
      behavior: "smooth",
      top: amountToScroll + window.pageYOffset
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
