import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'
import './index.css'
import './pages/Home/home.css'
import './pages/About/about.css'
import './pages/Contact/contact.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider route = {router} />
)
    