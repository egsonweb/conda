import 'isomorphic-fetch';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router'
import App from 'shared/App';
import '../assets/styles/index.scss';

const wrapper = document.getElementById('wrapper');

if (process.env.NODE_ENV === 'development') {
  const { AppContainer } = require('react-hot-loader');
  render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    wrapper
  );
} else {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    wrapper
  );
}

if (module.hot) {
  module.hot.accept();
}
