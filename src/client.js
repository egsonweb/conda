import 'isomorphic-fetch'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './shared/App'

const wrapper = document.getElementById('wrapper')

if (process.env.NODE_ENV === 'development') {
  const { AppContainer } = require('react-hot-loader')
  render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    wrapper
  )
} else {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    wrapper
  )
}

if (module.hot) {
  module.hot.accept()
}
