import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useBooks from '@zustand/useBooks'
import { useEffect, useState } from 'react'
import styles from '@styles/Book.module.scss'
import CircularProgress from '@components/CircularProgress'
import BookMeta from '@components/BookMeta'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import Settings from '@components/Settings'
import Modal from '@components/Modal'
import Button from '@components/Button'
import useWarningMessage from '@zustand/useWarningMessage'
import WarningMessage from '@components/WarningMessage'
import LoadingScreen from '@components/LoadingScreen'
import Main from '@components/Main'
import { preventNonNumericInput } from '@utils'

const Book: NextPage = () => {
  const [pageControllerNumber, setPageControllerNumber] = useState(10)
  const [openSettings, setOpenSettings] = useState(false)
  const [openBookDeletionDialog, setOpenBookDeletionDialog] = useState(false)
  const [loadingScreen, setLoadingScreen] = useState(true)
  const router = useRouter()
  const { slug } = router.query
  const books = useBooks((state) => state.books)
  const book = books.find((book) => book.slug === slug)
  const addReadPages = useBooks((state) => state.addReadPages)
  const removeReadPages = useBooks((state) => state.removeReadPages)
  const deleteBook = useBooks((state) => state.deleteBook)
  const warningMessage = useWarningMessage((state) => state.message)

  useEffect(() => {
    const handler = setTimeout(() => {
      setLoadingScreen(false)
    }, 2000)
    return () => clearTimeout(handler)
  }, [router.query.slug])

  if (loadingScreen) {
    return <LoadingScreen />
  }

  if (!book) {
    return (
      <div>
        <h1>Book not found</h1>
      </div>
    )
  }

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (!isNaN(Number(value))) {
      setPageControllerNumber(Number(value))
    }
  }

  const handleAddReadPages = () => {
    if (book.currentPage + pageControllerNumber <= book.pageCount) {
      addReadPages(book.id, pageControllerNumber)
    } else {
      addReadPages(book.id, book.pageCount - book.currentPage)
    }
  }

  const handleRemoveReadPages = () => {
    if (book.currentPage - pageControllerNumber >= 0) {
      removeReadPages(book.id, pageControllerNumber)
    } else {
      removeReadPages(book.id, book.currentPage)
    }
  }

  const handleBookDeletion = () => {
    deleteBook(book.id)
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{book.title}</title>
        <meta name='description' content={`Tracking ${book.title}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* sidebar */}
      <aside className={styles.sidebar}>
        {/* header */}
        <header className={styles.header}>
          <div className={styles.logo} onClick={() => router.push('/')}>
            Corteza<span> | Book Tracker</span>
          </div>
          <div className={styles.pageController}>
            <AiFillMinusCircle onClick={handleRemoveReadPages} />
            <input
              type='text'
              onKeyDown={preventNonNumericInput}
              value={pageControllerNumber}
              onChange={handlePageChange}
            />
            <AiFillPlusCircle onClick={handleAddReadPages} />
          </div>
        </header>
        {/* book */}
        <div>
          {/* circular progress */}
          <CircularProgress
            title={book.title}
            imgURL={book.imgURL}
            currentPage={book.currentPage}
            pageCount={book.pageCount}
          />
          {/* book meta */}
          <BookMeta
            title={book.title}
            author={book.author}
            rating={book.rating}
            category={book.category}
            pageCount={book.pageCount}
            publishedYear={book.publishedYear}
          />
        </div>
        {/* footer */}
        <footer className={styles.footer}>
          <a onClick={() => router.push('/')}>New Search</a>
          <a onClick={() => setOpenSettings(true)}>Book Settings</a>
          <a onClick={() => setOpenBookDeletionDialog(true)}>
            Delete This Book
          </a>
        </footer>
      </aside>
      {/* main section */}
      <Main bookId={book.id} entriesLength={book.entries.length} />
      {/* -- Dialogs-- */}
      {/* settings */}
      {openSettings && (
        <Modal setOpen={setOpenSettings}>
          <Settings
            selectedBook={book}
            setOpenSettings={setOpenSettings}
            title='Book Settings'
          />
        </Modal>
      )}
      {/* book deletion */}
      {openBookDeletionDialog && (
        <Modal setOpen={setOpenBookDeletionDialog}>
          <div className={styles.bookDelitionDialog}>
            <h3>Are you sure you want to delete this book?</h3>
            <p>All of the data related to this book will be lost.</p>
            <Button
              size='medium'
              color='dark'
              type='button'
              onClick={() => setOpenBookDeletionDialog(false)}
              text='Cancel'
            />
            <Button
              size='medium'
              color='light'
              type='button'
              onClick={handleBookDeletion}
              text='Delete'
            />
          </div>
        </Modal>
      )}
      {/* feedback message */}
      {warningMessage && <WarningMessage />}
    </div>
  )
}

export default Book
