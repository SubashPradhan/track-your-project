import React, { Component } from 'react'
import View from './view'
import { connect } from 'react-redux'
import { getMenuClickedStat } from '../../actions/menuClicked'

class Navbar extends Component {
  state = {
    currentScreenHeight: window.innerHeight,
    scrollHeight: false,
    currentScreenWidth: window.innerWidth
  }

  componentDidMount() {
    const getScrollHeight = () => {
      if (window.pageYOffset > this.state.currentScreenHeight / 3) {
        this.setState({
          scrollHeight: true
        })
      }
      else {
        this.setState({
          scrollHeight: false,
        })
      }
    }
    window.onscroll = function () { getScrollHeight() }
  }

  handleMenu = () => {
    this.props.dispatch(getMenuClickedStat())
  }

  setScrollingHeight = (pageId) => {
    if (this.state.currentScreenWidth > 600) {
      if (pageId === 'home') {
        this.setState({
          currentScreenHeight: 0
        })
      }
      else if (pageId === 'about') {
        this.setState({
          currentScreenHeight: this.state.currentScreenHeight
        })
      }
      else if (pageId === 'goals') {
        this.setState({
          currentScreenHeight: 2 * this.state.currentScreenHeight
        })
      }
    } 
    else {
      if (pageId === 'home') {
        this.setState({
          currentScreenHeight: 0
        })
      }
      else if (pageId === 'about') {
        this.setState({
          currentScreenHeight: 2 * this.state.currentScreenHeight
        })
      }
      else if (pageId === 'goals') {
        this.setState({
          currentScreenHeight: 4 * this.state.currentScreenHeight
        })
      }
    }

  }

  // Triggers focus for safari and mobile-devices
  setFocus = async (e) => {
    const current = e.target
    if (current) {
      current.focus()
    }
    let currentId = await e.target.id

    await this.setScrollingHeight(currentId)
    this.props.dispatch(getMenuClickedStat())
    window.scroll({
      top: this.state.currentScreenHeight,
      behavior: "smooth"
    })

    await this.setState({ currentScreenHeight: window.innerHeight })
  }

  render() {
    return (
      <div>
        <View
          menuClicked={this.props.menuClicked}
          handleMenu={this.handleMenu}
          setFocus={this.setFocus}
          scrollHeight={this.state.scrollHeight}
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


export default connect(mapStateToProps)(Navbar)