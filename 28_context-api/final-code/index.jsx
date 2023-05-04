import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Error from './components/Error'
import CountryDetail from './components/CountryDetail'

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
        path: '/:country',
        element: <CountryDetail />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)
