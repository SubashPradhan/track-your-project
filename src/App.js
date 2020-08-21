import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Main from '../src/components/Main'

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Main} />
      </div>
    )
  }
}

export default App