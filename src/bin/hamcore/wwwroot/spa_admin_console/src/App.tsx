import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  </Router>
)

export default App
