import React, { Component } from 'react'
import { View } from './view'

export default class Contact extends Component {
  state = {
    isName: null,
    isEmail: null,
    isSubject: null,
    isFocus: null,
    hasValue: null,
    name: '',
    email: '',
    subject: ''
  }

  handleInput = (e, field) => {
    e.preventDefault()
    const { value } = e.target
    this.setState({
      [field]: value
    })
  }

  handleFocus = async (e) => {
    let currentId = e.target.id
    if (currentId === 'name' || this.state.name) {
      this.setState({
        isName: true
      })
    }
    if (currentId === 'email' || this.state.email) {
      this.setState({
        isEmail: true
      })
    }
    if (currentId === 'subject' || this.state.subject.length) {
      this.setState({
        isSubject: true
      })
    }
  }

  handleFocusOut = () => {
    if (!this.state.name) {
      this.setState({
        isName: false
      })
    }
    if (!this.state.email) {
      this.setState({
        isEmail: false
      })
    }
    if (!this.state.subject) {
      this.setState({
        isSubject: false
      })
    }
  }

  render() {
    return <View
      handleInput={this.handleInput}
      handleFocus={this.handleFocus}
      handleFocusOut={this.handleFocusOut}
      isName={this.state.isName}
      isEmail={this.state.isEmail}
      isSubject={this.state.isSubject}
      value={this.state}
    />
  }
}
