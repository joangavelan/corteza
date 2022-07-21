import { useEffect, useRef } from 'react'
import styles from '@styles/SearchBar.module.scss'
import useSearchQuery from '@zustand/useSearchQuery'

const SearchBar = () => {
  const searchQuery = useSearchQuery((state) => state.searchQuery)
  const setSearchQuery = useSearchQuery((state) => state.setSearchQuery)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <input
      ref={inputRef}
      className={styles.searchBar}
      placeholder='e.g: Blue Economy (Gunter Pauli)'
      name='search'
      type='search'
      aria-label='search'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  )
}

export default SearchBar
