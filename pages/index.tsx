import { useState } from 'react'
import Button from '@components/Button'
import Heading from '@components/Heading'
import SearchBar from '@components/SearchBar'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'
import { AiFillCaretRight } from 'react-icons/ai'
import BookSearchResults from '@components/BookSearchResults'
import useStore from '@zustand/store'
import NonSSRWrapper from '@components/NonSSRWrapper'
import SelectedBook from '@components/SelectedBook'
import { Book } from '@models'
import Modal from '@components/Modal'
import Settings from '@components/Settings'

const Home: NextPage = () => {
  const searchQuery = useStore((state) => state.searchQuery)
  const selectedBook = useStore((state) => state.selectedBook)
  const [emptyFields, setEmptyFields] = useState<string[]>([])
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleStartTracking = () => {
    if (selectedBook) {
      const emptyFields = Object.keys(selectedBook).filter(
        (key) => selectedBook[key as keyof Book] === undefined
      )
      if (emptyFields.length > 0) {
        setEmptyFields(emptyFields)
        setModalIsOpen(true)
      } else {
        console.log('start tracking')
      }
    } else {
      console.log('select a book first')
    }
  }

  return (
    <div className={styles.container}>
      {/* head */}
      <Head>
        <title>Corteza</title>
        <meta name='description' content='Book tracking app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NonSSRWrapper>
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
              <SelectedBook
                title={selectedBook.title}
                author={selectedBook.author}
              />
            ) : (
              <SearchBar />
            )}
            <Button
              text='Start Tracking'
              type='button'
              Icon={AiFillCaretRight}
              onClick={handleStartTracking}
            />
          </div>
          {/* search results */}
          {!!searchQuery.trim() && <BookSearchResults />}
        </div>
      </NonSSRWrapper>
      {modalIsOpen && (
        <Modal setOpen={setModalIsOpen}>
          <Settings
            ids={emptyFields}
            title='Before you continue!'
            description='Please fill in the missing fields before you start tracking.'
          />
        </Modal>
      )}
    </div>
  )
}

export default Home
