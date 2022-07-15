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

const Home: NextPage = () => {
  const searchQuery = useStore((state) => state.searchQuery)

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
            <SearchBar />
            <Button
              text='Start Tracking'
              type='button'
              Icon={AiFillCaretRight}
            />
          </div>
          {/* search results */}
          {!!searchQuery.trim() && <BookSearchResults />}
        </div>
      </NonSSRWrapper>
    </div>
  )
}

export default Home
