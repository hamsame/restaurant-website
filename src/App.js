import React from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Reservation from './Reservation'
import Navbar from './Navbar'
import Menu from './Menu'
import { Route, Link } from 'react-router-dom'
import Footer from './Footer'

const App = () => {
  // return <Navbar />
  return (
    <div>
      {/* <Navbar /> */}
      <Route exact path='/' component={Home} />
      <Route exact path='/menu' component={Menu} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/reservation' component={Reservation} />
      <Footer />
    </div>
  )
}

export default App
