import React, { Component } from 'react'
import View from './view'

class Home extends Component {
  state = {
    amountToScroll: 800
  }

  scrollDown = () => {
    const { amountToScroll } = this.state
    window.scrollTo({
      behavior: "smooth",
      top: amountToScroll
    })
    this.setState({
      amountToScroll: amountToScroll + 800
    })
  }

  render() {
    return <View
      scrollDown={this.scrollDown}
    />
  }
}

export default Home