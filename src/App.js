import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './styles/app.css'
import Home from '../src/components/Home'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div className="main-page">
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
      </div>
    )
  }
}

export default App