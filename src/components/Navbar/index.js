import React, { Component } from 'react'
import View from './view'
import { connect } from 'react-redux'
import { getMenuClickedStat } from '../../actions/menuClicked'

class Navbar extends Component {
  handleMenu = () => {
    this.props.dispatch(getMenuClickedStat())
  }

  // Triggers focus for safari and mobile-devices
  setFocus = (e) => {
    const current = e.target
    if (current) {
      current.focus()
    }
  }

  render() {
    return (
      <div>
        <View
          menuClicked={this.props.menuClicked}
          handleMenu={this.handleMenu}
          setFocus={this.setFocus}
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