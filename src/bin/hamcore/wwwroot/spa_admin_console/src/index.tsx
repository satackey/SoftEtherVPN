import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './UIKitSetup'

import './index.css'
import App from './App'
import { configureStore } from './states'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
