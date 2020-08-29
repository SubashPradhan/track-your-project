import React, { Component } from 'react'
import View from './view'
import { connect } from 'react-redux'
import { getMenuClickedStat } from '../../actions/menuClicked'

class Navbar extends Component {
  state = {
    currentScrollHeight: null
  }

  handleMenu = () => {
    this.props.getMenuClickedStat()
  }
  
  scrollEffect = async (currentId) => {
    if (currentId === 'home'){
      await this.setState({
        currentScrollHeight: this.props.scrollHeight.homeScrollHeight
      })
    } else if (currentId === 'about'){
      await this.setState({
        currentScrollHeight: this.props.scrollHeight.aboutScrollHeight
      })
    } else if (currentId === 'goals'){
      await this.setState({
        currentScrollHeight: this.props.scrollHeight.goalsScrollHeight
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
    window.scroll({
        top: this.state.currentScrollHeight,
        behavior: "smooth"
      })
    }
    
    render() {
    console.log("NAVBAR", this.props.scrollHeight.aboutScrollHeight)
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
    menuClicked: state.menuClicked,
    scrollHeight: state.scrollHeight
  }
}


export default connect(mapStateToProps, { getMenuClickedStat })(Navbar)