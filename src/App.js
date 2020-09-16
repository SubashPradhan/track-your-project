import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Main from '../src/components/Main'
import Login from '../src/components/Login'

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Main} />
        <Route path='/login' component={Login} />
      </div>
    )
  }
}

export default App