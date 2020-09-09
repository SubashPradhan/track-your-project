import React, { Component } from 'react'
import View from './view'
import { connect } from 'react-redux'
import { getMenuClickedStat } from '../../actions/menuClicked'

class Navbar extends Component {
  state = {
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

  // Triggers focus for safari and mobile-devices
  setFocus = async (e) => {
    const current = e.target
    if (current) {
      current.focus()
    }
    this.props.getMenuClickedStat()
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
    menuClicked: state.menuClicked
  }
}


export default connect(mapStateToProps, { getMenuClickedStat })(Navbar)