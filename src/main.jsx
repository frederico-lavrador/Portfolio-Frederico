import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'
import './index.css'
import './pages/Home/home.css'
import './pages/About/about.css'
import './pages/Projects/projects.css';
import './pages/Contact/contact.css'
import './pages/Error/error.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);