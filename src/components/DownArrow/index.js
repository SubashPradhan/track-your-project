import React, { Component } from 'react'
import { View } from './view'

export default class DownArrow extends Component {

  state = {
    amountToScroll: window.innerHeight + 50
  }

  scrollDown = async () => {
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
