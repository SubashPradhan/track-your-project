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
    message: '',
    error: null,
    successMsg: null
  }

  handleInput = (e, field) => {
    e.preventDefault()
    const { value } = e.target
    this.setState({
      [field]: value
    })
    this.handleError()
  }

  handleError = () => {
    if (!this.state.name || !this.state.email || !this.state.subject) {
      this.setState({
        error: "All fields are required."
      })
      return false
    } else {
      this.setState({ error: '' })
    }


    if (this.state.email) {
      const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(this.state.email)) {
        this.setState({
          error: "Please enter a valid email."
        })
        return false
      }
    }
    return true
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
      if (this.handleError()) {
        // const response = await emailjs.send('contact_service', 'template_jh4031l', this.state, 'user_yunGgCParLmCgDqeYQTwO')
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
          successMsg: "Thank you for your feedback, we will get back to you very soon."
        })
      }
    } catch (error) {
      console.log(error)
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
      handleSubmit={this.handleSubmit}
      value={this.state}
      error={this.state.error}
      successMsg={this.state.successMsg}
    />
  }
}
