import Header from './components/Header'
import { Outlet } from 'react-router-dom'

import './App.css'
import { useState } from 'react'

const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />
    </>
  )
}

export default App
