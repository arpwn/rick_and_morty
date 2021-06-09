import React from 'react'
import './App.css'
import CharacterData from './components/CharacterData'
import EpisodeData from './components/EpisodeData'
import HomePage from './components/HomePage'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './assets/logo.jpg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export default function App () {

  return (

    <Router>    
      <div>
      {/* Navbar */}
      <>
        <Navbar bg="light" variant="light" className="justify-content-left">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
          <Nav>
            <Nav.Link href="#">
              <Link id="link" to='/'>Inicio</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link id="link" to='/character'>Personajes</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link id="link" to='/episode'>Episodios</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </>

      {/* ----------------------------------------- */}

      <Switch>
          <Route exact path='/'> 
            <Home /> 
          </Route>
          <Route path='/character'> 
            <Character />
          </Route>
          <Route path='/episode'> 
            <Episode />
          </Route>
        </Switch>

      </div>
    </Router>

  )
}

function Episode () {   
  return (
    <div>
      <h3>Episodios</h3>
      <hr />
      <EpisodeData />
    </div>
  )
}

function Character () {   
  return (
    <div>
      <h3>Personajes</h3>
      <hr />
      <CharacterData />
    </div>
  )
}

function Home(){    
  return (
    <div>
      <HomePage />
    </div>
  )
}