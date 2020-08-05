import React, { Component } from 'react'
import Home from '../src/components/Home'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Home} />
      </div>
    )
  }
}

export default App