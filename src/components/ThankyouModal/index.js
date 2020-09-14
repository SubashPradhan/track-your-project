import React, { Component } from 'react'
import { View } from './view'
import { connect } from 'react-redux'
import {showModalStat} from '../../actions/showModal'

class Thankyou extends Component {

  onClose = () =>{
    this.props.showModalStat()
  }

  render() {
    return (
      <div>
        <View 
          showModal={this.props.showModal}
          onClose={this.onClose}
        />
      </div>
    )
  }
}

export default connect (null, {showModalStat})(Thankyou)