import React, { Component } from 'react'
import { View } from './view'
import emailjs from 'emailjs-com';


export default class Contact extends Component {
  state = {
    isName: null,
    isEmail: null,
    isSubject: null,
    isFocus: null,
    hasValue: null,
    name: '',
    email: '',
    subject: '',
    message: ''
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

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await emailjs.send('contact_service', 'template_jh4031l', this.state, 'user_yunGgCParLmCgDqeYQTwO')
      if (response){
        console.log('SUCCESS!', response.status)
        console.log(response.status)
      }
    } catch (error) {
      console.log(error)
    }
    
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  render() {
    return <View
      handleInput={this.handleInput}
      handleFocus={this.handleFocus}
      handleFocusOut={this.handleFocusOut}
      isName={this.state.isName}
      isEmail={this.state.isEmail}
      isSubject={this.state.isSubject}
      handleSubmit={this.handleSubmit}
      value={this.state}
    />
  }
}
