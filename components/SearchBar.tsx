import React from 'react'
import styles from '../styles/SearchBar.module.scss'

const SearchBar: React.FC = () => {
  return (
    <input
      className={styles.searchBar}
      placeholder='e.g: Blue Economy'
      name='search'
      type='text'
      aria-label='search'
    />
  )
}

export default SearchBar
