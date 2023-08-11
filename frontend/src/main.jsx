import React from 'react'
import ReactDOM from 'react-dom/client'
import Global from './theme/global.js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
)
