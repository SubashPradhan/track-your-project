import React, { Component } from 'react'
import View from './view'

class Navbar extends Component {
  state = {
    menuClicked: false,
  }

  handleMenu = () => {
    this.setState({
      menuClicked: !this.state.menuClicked
    })
  }

  // Triggers focus for safari and mobile-devices
  setFocus = (e) => {
    const current = e.target
    if (current){
      current.focus()
    }
  }

  
  render() {
    return (
      <div>
        <View 
          menuClicked={this.state.menuClicked}
          handleMenu={this.handleMenu}
          setFocus={this.setFocus}
        />
      </div>
    )
  }
}

export default Navbar