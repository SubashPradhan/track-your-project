import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../src/components/Home'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
      </div>
    )
  }
}

export default App