import { useEffect, useRef } from 'react'
import styles from '@styles/SearchBar.module.scss'
import useStore from '@zustand/store'

const SearchBar = () => {
  const searchQuery = useStore((state) => state.searchQuery)
  const setSearchQuery = useStore((state) => state.setSearchQuery)
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
