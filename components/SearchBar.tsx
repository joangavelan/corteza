import styles from '@styles/SearchBar.module.scss'
import useStore from '@zustand/store'

const SearchBar = () => {
  const searchQuery = useStore((state) => state.searchQuery)
  const setSearchQuery = useStore((state) => state.setSearchQuery)

  return (
    <input
      className={styles.searchBar}
      placeholder='e.g: Blue Economy (Gunter Pauli)'
      name='search'
      type='text'
      aria-label='search'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  )
}

export default SearchBar
