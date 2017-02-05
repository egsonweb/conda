import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  Home,
  About,
  NotFound
} from './components/pages'
import './themes/global'

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
