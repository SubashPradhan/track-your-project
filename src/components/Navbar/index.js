import React, { Component } from 'react'
import View from './view'
import { connect } from 'react-redux'
import { getMenuClickedStat } from '../../actions/menuClicked'

class Navbar extends Component {
  state = {
    currentScrollHeight: null,
    scrollNav: false
  }

  componentDidMount = () => {
    const getNavBackground = () => {
      if (window.pageYOffset > window.innerHeight / 3) {
        this.setState({
          scrollNav: true
        })
      }
      else {
        this.setState({
          scrollNav: false
        })
      }
    }
    window.onscroll = function () { getNavBackground() }
  }

  handleMenu = () => {
    this.props.getMenuClickedStat()
  }


  scrollEffect = async (currentId) => {
    if (currentId === 'home') {
      await this.setState({
        currentScrollHeight: this.props.scrollHeight.homeScrollHeight
      })
    } else if (currentId === 'about') {
      await this.setState({
        currentScrollHeight: this.props.scrollHeight.aboutScrollHeight
      })
    } else if (currentId === 'goals') {
      await this.setState({
        currentScrollHeight: this.props.scrollHeight.goalsScrollHeight
      })
    } else if (currentId === 'contact') {
      this.setState({
        currentScrollHeight: this.props.scrollHeight.contactScrollHeight
      })
    }
  }

  // Triggers focus for safari and mobile-devices
  setFocus = async (e) => {
    const current = e.target
    if (current) {
      current.focus()
    }
    let currentId = await e.target.id
    await this.scrollEffect(currentId)
    this.props.getMenuClickedStat()

    window.scrollTo({
      top: this.state.currentScrollHeight,
      behavior: "smooth"
    })
  }

  render() {
    return (
      <div>
        <View
          menuClicked={this.props.menuClicked}
          handleMenu={this.handleMenu}
          setFocus={this.setFocus}
          scrollNav={this.state.scrollNav}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuClicked: state.menuClicked,
    scrollHeight: state.scrollHeight
  }
}


export default connect(mapStateToProps, { getMenuClickedStat })(Navbar)