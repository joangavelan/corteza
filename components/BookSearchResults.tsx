import { useState, useEffect } from 'react'
import styles from '@styles/BookSearchResults.module.scss'
import { getGoogleBooks } from '@services'
import { adaptBookSearchResults } from '@adapters'
import { Book } from '@models'
import BookSearchResult from './BookSearchResult'
import BookSearchResultLoader from './loaders/BookSearchResultLoader'
import useSearchQuery from '@zustand/useSearchQuery'

const BookSearchResults = () => {
  const searchQuery = useSearchQuery((state) => state.searchQuery)
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState<Book[]>([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchBooks(query: string, signal: AbortSignal) {
      setLoading(true)
      const books = await getGoogleBooks(query, signal)
      if (books) {
        setBooks(adaptBookSearchResults(books))
      } else {
        setBooks([])
        setErrorMessage(`No results found for "${query}"`)
      }
      setLoading(false)
    }

    const debouncedFetch = setTimeout(() => {
      fetchBooks(searchQuery, controller.signal)
    }, 500)

    return () => {
      clearTimeout(debouncedFetch)
      controller.abort()
    }
  }, [searchQuery])

  if (loading) {
    return (
      <div className={styles.container}>
        {Array.from(Array(books.length || 5)).map((_, i) => (
          <div className={styles.loader} key={i}>
            <BookSearchResultLoader />
          </div>
        ))}
      </div>
    )
  }

  if (books.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.noResults}>{errorMessage}</div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {books.map((book) => (
        <BookSearchResult key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookSearchResults
