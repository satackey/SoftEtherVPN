import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom'

import { Root } from './dashboard/Root'

export const Dashboard: React.FC = () => (
  <Router>
    <div>SideBar</div>
    <Switch>
      <Route path="/">
        <Root />
      </Route>
    </Switch>
  </Router>
)
