import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View } from './view'
import {getScrollHeight} from '../../actions/getScrollHeight'

class Main extends Component {
  state = {
    aboutRef: React.createRef(), 
    homeRef: React.createRef(),
    goalsRef: React.createRef(),
    currentHomeScroll: null,
    currentAboutScroll: null,
    currentGoalsScroll: null 
  }

  componentDidMount = () => {
    const refs = [this.state.homeRef, this.state.aboutRef, this.state.goalsRef]
    this.props.getScrollHeight(refs)
  }

  render() {
    return (
      <div>
        <View 
        menuClicked={this.props.menuClicked} 
        aboutRef={this.state.aboutRef}
        homeRef={this.state.homeRef}
        goalsRef={this.state.goalsRef}
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

export default connect (mapStateToProps, {getScrollHeight}) (Main)