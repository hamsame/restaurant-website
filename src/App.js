import React from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Reservation from './Reservation'
import Navbar from './Navbar'
import { Route, Link } from 'react-router-dom'

const App = () => {
  // return <Navbar />
  return (
    <div>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/reservation' component={Reservation} />
    </div>
  )
}

export default App
