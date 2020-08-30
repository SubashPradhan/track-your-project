import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View } from './view'
import {getScrollHeight} from '../../actions/getScrollHeight'
import {getMenuClickedStat} from '../../actions/menuClicked'

class Main extends Component {
  state = {
    aboutRef: React.createRef(), 
    homeRef: React.createRef(),
    goalsRef: React.createRef()
  }

  componentDidMount = () => {
    const refs = [this.state.homeRef, this.state.aboutRef, this.state.goalsRef]
    this.props.getScrollHeight(refs)
  }

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
        aboutRef={this.state.aboutRef}
        homeRef={this.state.homeRef}
        goalsRef={this.state.goalsRef}
        handleClick={this.handleClick}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    menuClicked: state.menuClicked,
    scrollHeight: state.scrollHeight
  }
}

export default connect (mapStateToProps, {getScrollHeight, getMenuClickedStat}) (Main)