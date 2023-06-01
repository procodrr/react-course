import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main className="py-4 px-4 md:px-8">
        <Outlet />
      </main>
    </>
  )
}

export default App
