import { useContext, useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Home() {
  const [query, setQuery] = useState('')
  const [isDark] = useContext(ThemeContext)
  return (
    <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === 'unmount' ? '' : <CountriesList query={query} />}
    </main>
  )
}
