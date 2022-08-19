import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useBooks from '@zustand/useBooks'
import { useEffect, useState } from 'react'
import styles from '@styles/Book.module.scss'
import useWarningMessage from '@zustand/useWarningMessage'
import WarningMessage from '@components/WarningMessage'
import LoadingScreen from '@components/LoadingScreen'
import Main from '@components/Main'
import useCurrentBookId from '@zustand/useCurrentBookId'
import Sidebar from '@components/Sidebar'

const Book: NextPage = () => {
  const [loadingScreen, setLoadingScreen] = useState(true)
  const router = useRouter()
  const { slug } = router.query
  const books = useBooks((state) => state.books)
  const book = books.find((book) => book.slug === slug)
  const warningMessage = useWarningMessage((state) => state.message)
  const setCurrentBookId = useCurrentBookId((state) => state.setId)

  useEffect(() => {
    const handler = setTimeout(() => {
      setLoadingScreen(false)
    }, 2000)
    return () => clearTimeout(handler)
  }, [router.query.slug])

  useEffect(() => {
    if (book) {
      setCurrentBookId(book.id)
    }
  }, [book, setCurrentBookId])

  if (loadingScreen) {
    return (
      <>
        <Head>
          <title>{book?.title || 'Corteza'}</title>
          <meta
            name='description'
            content={`Tracking ${book?.title || 'Corteza'}`}
          />
          <link rel='icon' href='/open-book.png' />
        </Head>
        <LoadingScreen />
      </>
    )
  }

  if (!book) {
    return (
      <div>
        <h1>Book not found</h1>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{book.title}</title>
        <meta name='description' content={`Tracking ${book.title}`} />
        <link rel='icon' href='/open-book.png' />
      </Head>

      <Sidebar book={book} />

      <Main bookId={book.id} entriesLength={book.entries.length} />

      {warningMessage && <WarningMessage />}
    </div>
  )
}

export default Book
