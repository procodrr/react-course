import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Contact from './components/Contact.jsx'

const Home = lazy(() => wait(0).then(() => import('./components/Home')))
const About = lazy(() => wait(0).then(() => import('./components/About')))
const Contact = lazy(() =>
  wait(0).then(() =>
    import('./components/Contact').then((module) => ({
      default: module.Contact,
    }))
  )
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
