import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import store from './redux store/configureStore.js'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import routes from './App.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>,
) 
