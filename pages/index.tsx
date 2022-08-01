import { useState } from 'react'
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
import { BookMeta } from '@models'
import Modal from '@components/Modal'
import Settings from '@components/Settings'
import useSearchQuery from '@zustand/useSearchQuery'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const searchQuery = useSearchQuery((state) => state.searchQuery)
  const selectedBook = useSelectedBook((state) => state.selectedBook)
  const [emptyFields, setEmptyFields] = useState<Array<keyof BookMeta>>([])
  const [openSettings, setOpenSettings] = useState(false)
  const router = useRouter()

  const handleStartTracking = () => {
    if (selectedBook) {
      // get the keys that have empty values from the selected book
      const emptyFields = Object.keys(selectedBook).filter(
        (key) => selectedBook[key as keyof BookMeta] === undefined
      )
      // if there are empty fields, open the settings form to fill them out
      if (emptyFields.length > 0) {
        setEmptyFields(emptyFields as Array<keyof BookMeta>)
        setOpenSettings(true)
        // otherwise go to the tracking page
      } else {
        router.push(`tracking/${selectedBook.title}`)
      }
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
            color='light'
            size='medium'
          />
        </div>
        {/* search results */}
        {!!searchQuery.trim() && <BookSearchResults />}
      </div>
      {openSettings && (
        <Modal setOpen={setOpenSettings}>
          <Settings
            conditionalFields={emptyFields}
            title='Before you continue!'
            description='It seems that we were not able to collect all the necessary data for this book. Please fill in the missing fields for better tracking. (You can edit them later)'
            setOpenSettings={setOpenSettings}
          />
        </Modal>
      )}
    </div>
  )
}

export default Home
