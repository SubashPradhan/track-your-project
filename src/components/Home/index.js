import React, { Component } from 'react'
import { connect } from 'react-redux'
import View from './view'

class Home extends Component {
  state = {
    amountToScroll: 800
  }

  scrollDown = () => {
    const {amountToScroll} = this.state
    window.scrollTo({
      behavior: "smooth",
      top: amountToScroll
    })
    this.setState({
      amountToScroll: amountToScroll + 800
    })
  }

  render() {
    return (
      <div>
        <View
          menuClicked={this.props.menuClicked}
          scrollDown={this.scrollDown}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuClicked: state.menuClicked
  }
}

export default connect(mapStateToProps)(Home)