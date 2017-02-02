import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Page } from 'hedron'

import Menu from 'shared/common/menu'
import {
  Home,
  About,
  NotFound
} from 'shared/pages'

function App() {
  return (
    <div className="app-container">
      <Page fluid className="page">
        <Menu />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
      </Page>
    </div>
  )
}

export default App
