import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Login from './pages/login'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>
)

export default App
