import { useEffect, useState } from 'react'
import Button from '@components/Button'
import Heading from '@components/Heading'
import SearchBar from '@components/SearchBar'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'
import { AiFillCaretRight } from 'react-icons/ai'
import BookSearchResults from '@components/BookSearchResults'
import useSelectedBook from '@zustand/useSelectedBook'
import SelectedBook from '@components/SelectedBook'
import { Book } from '@models'
import Modal from '@components/Modal'
import Settings from '@components/Settings'
import useSearchQuery from '@zustand/useSearchQuery'
import { useRouter } from 'next/router'
import useBooks from '@zustand/useBooks'
import Link from 'next/link'
import NonSSRWrapper from '@components/NonSSRWrapper'

const Home: NextPage = () => {
  const searchQuery = useSearchQuery((state) => state.searchQuery)
  const selectedBook = useSelectedBook((state) => state.selectedBook)
  const setSelectedBook = useSelectedBook((state) => state.setSelectedBook)
  const saveBook = useBooks((state) => state.saveBook)
  const books = useBooks((state) => state.books)
  const [emptyFields, setEmptyFields] = useState<Array<keyof Book>>([])
  const [openSettings, setOpenSettings] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  const handleStartTracking = () => {
    if (!selectedBook) {
      setErrorMessage('Please select a book to track')
      return
    }

    const bookAlreadyExists = books.find((book) => book.id === selectedBook.id)
    if (bookAlreadyExists) {
      setErrorMessage('Book already exists')
      return
    }

    // check if there are any empty fields in the selected book
    const emptyFields = Object.keys(selectedBook).filter(
      (key) => selectedBook[key as keyof Book] === undefined
    )
    // if there are empty fields then open the pre-track settings to fill them out
    if (!!emptyFields.length) {
      setEmptyFields(emptyFields as Array<keyof Book>)
      setOpenSettings(true)
    } else {
      // otherwise just save the book in the persistent (local storage) global state and go to the tracking page
      saveBook(selectedBook)
      router.push(`books/${selectedBook.slug}`)
    }
  }

  useEffect(() => {
    if (!!errorMessage) {
      setTimeout(() => {
        setErrorMessage('')
      }, 3000)
    }
  }, [errorMessage])

  useEffect(() => {
    setSelectedBook(null)
  }, [setSelectedBook])

  return (
    <div className={styles.container}>
      {/* head */}
      <Head>
        <title>Corteza</title>
        <meta name='description' content='Book tracking app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* content */}
      <div className={styles.content}>
        {/* heading */}
        <Heading
          variant='search'
          title="Search For A Book You'd Like to Read & Track"
        />
        {/* search */}
        <div className={styles.searchContainer}>
          {selectedBook ? (
            // selected book component
            <SelectedBook
              title={selectedBook.title}
              author={selectedBook.author}
            />
          ) : (
            // search input bar
            <SearchBar />
          )}
          {/* start tracking button */}
          <Button
            text='Start Tracking'
            type='button'
            Icon={AiFillCaretRight}
            onClick={handleStartTracking}
            color='light'
            size='medium'
          />
          {/* search results */}
          {!!searchQuery.trim() && <BookSearchResults />}
        </div>
        {/* continue reading */}
        <NonSSRWrapper>
          <ul className={styles.booksTracking}>
            {books.map((book) => (
              <li key={book.id}>
                <Link href={`books/${book.slug}`}>
                  <a className={styles.book}>
                    <h4 className={styles.bookTitle}>{book.title}</h4>
                    <div>
                      <span className={styles.currentPage}>
                        {book.currentPage}
                      </span>
                      /
                      <span className={styles.pageCount}>{book.pageCount}</span>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </NonSSRWrapper>
      </div>
      {openSettings && (
        <Modal setOpen={setOpenSettings}>
          <Settings
            conditionalFields={emptyFields}
            selectedBook={selectedBook!}
            title='Before you continue!'
            description='It seems that we were not able to collect all the necessary data for this book. Please fill in the missing fields for better tracking. (You can edit them later)'
            setOpenSettings={setOpenSettings}
          />
        </Modal>
      )}
      {/* error message */}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  )
}

export default Home
