import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import NavieBar from './components/NavieBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Plans from './components/Plans';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Container>
        <NavieBar />
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/register' component={Register} exact />
        <Route path='/plans' component={Plans} exact />
      </Container>
      <Footer />
    </Router>
  )
}

export default App
