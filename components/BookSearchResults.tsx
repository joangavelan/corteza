import { useState, useEffect } from 'react'
import styles from '@styles/BookSearchResults.module.scss'
import { getGoogleBooks } from '@services'
import { adaptBookSearchResults } from '@adapters'
import { Book } from '@models'
import BookSearchResult from './BookSearchResult'
import useStore from '@zustand/store'
import BookSearchResultLoader from './loaders/BookSearchResultLoader'

const BookSearchResults = () => {
  const searchQuery = useStore((state) => state.searchQuery)
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState<Book[]>([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchBooks(query: string, signal: AbortSignal) {
      setLoading(true)
      const books = await getGoogleBooks(query, signal)
      if (books) {
        console.log(adaptBookSearchResults(books))
        setBooks(adaptBookSearchResults(books))
      } else {
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

  if (!books?.length) {
    return (
      <div className={styles.container}>
        <div className={styles.noResults}>{errorMessage}</div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {books.map(({ id, title, imgUrl, author, rating }) => (
        <BookSearchResult
          key={id}
          title={title}
          imgUrl={imgUrl}
          author={author}
          rating={rating}
        />
      ))}
    </div>
  )
}

export default BookSearchResults
