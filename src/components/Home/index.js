import React, { Component } from 'react'
import { connect } from 'react-redux'
import View from './view'

class Home extends Component {
  render() {
    return (
      <div>
        <View 
          menuClicked={this.props.menuClicked}
        />  
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    menuClicked: state.menuClicked
  }
}

export default connect(mapStateToProps)(Home)