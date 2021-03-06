import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import { Login } from './pages/Login'
import { Dashboard } from './pages/dashboard'
import { Root } from './pages/Root'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/">
        <Root />
      </Route>
    </Switch>
  </Router>
)

export default App
