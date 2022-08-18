import React from 'react'
import styles from '@styles/Book.module.scss'
import Entries from './Entries'
import Credits from './Credits'
import { MainProps } from '@models'
import MainHeader from './MainHeader'

const Main = ({ bookId, entriesLength }: MainProps) => {
  return (
    <main className={styles.main}>
      {/* header */}
      <MainHeader entriesLength={entriesLength} bookId={bookId} />

      {/* entries table */}
      <Entries />

      <Credits />
    </main>
  )
}

export default React.memo(Main)
