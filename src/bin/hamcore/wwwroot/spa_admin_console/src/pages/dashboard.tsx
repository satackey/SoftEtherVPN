import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom'

import Index from './dashboard/index'

export const App: React.FC = () => (
  <Router>
    <div>SideBar</div>
    <Switch>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  </Router>
)
