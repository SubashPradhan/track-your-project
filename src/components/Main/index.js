import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View } from './view'
import {getMenuClickedStat} from '../../actions/menuClicked'

class Main extends Component {
  handleClick = () => {
    const {menuClicked} = this.props
    if (menuClicked){
      this.props.getMenuClickedStat()
    }
  }

  render() {
    return (
      <div>
        <View 
        menuClicked={this.props.menuClicked} 
        handleClick={this.handleClick}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    menuClicked: state.menuClicked,
  }
}

export default connect (mapStateToProps, {getMenuClickedStat}) (Main)