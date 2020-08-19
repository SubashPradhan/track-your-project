import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './styles/app.css'
import Home from '../src/components/Home'

class App extends Component {
  render() {
    return (
      <div className="main-page">
        <Route path='/home' exact component={Home} />
      </div>
    )
  }
}

export default App