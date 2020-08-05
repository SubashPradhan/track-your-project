import React, { Component } from 'react'
import View from './view'

class Navbar extends Component {
  state = {
    menuClicked: false
  }

  handleMenu = () => {
    this.setState({
      menuClicked: !this.state.menuClicked
    })
  }

  
  render() {
    return (
      <div>
        <View 
          menuClicked={this.state.menuClicked}
          handleMenu={this.handleMenu}
        />
      </div>
    )
  }
}

export default Navbar