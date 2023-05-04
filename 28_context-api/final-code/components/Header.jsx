import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export default function Header() {
  const [isDark, setIsDark] =  useContext(ThemeContext)

  // if(isDark) {
  //   document.body.classList.add('dark')
  // } else {
  //   document.body.classList.remove('dark')
  // }
  
  return (
    <header className={`header-container ${isDark? 'dark': ''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={() => {
          setIsDark(!isDark)
          localStorage.setItem('isDarkMode', !isDark)
        }}>
          <i className={`fa-solid fa-${isDark ? 'sun': 'moon'}` }/>
          &nbsp;&nbsp;{isDark? 'Light': 'Dark'} Mode
        </p>
      </div>
    </header>
  )
}
