import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './chat.css'
import './Chatblock.jsx'
import Chatblock from './Chatblock.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Chatblock />
  </React.StrictMode>,
)
