import { useState } from 'react'
import Button from '@components/Button'
import styles from '@styles/Book.module.scss'
import { FaPlus } from 'react-icons/fa'
import { Entry } from '@models'
import { BiSearchAlt2 } from 'react-icons/bi'
import Entries from './Entries'
import Credits from './Credits'
import EntryInterface from './EntryInterface'

interface BookMainProps {
  bookId: string
  entries: Entry[]
}

const BookMain = ({ bookId, entries }: BookMainProps) => {
  const [openEntryInterface, setOpenEntryInterface] = useState(false)

  return (
    <main className={styles.main}>
      {/* INIT HEADER */}
      <div className={styles.mainHeader}>
        <h2>Entries</h2>
        <Button
          color='light'
          size='small'
          type='button'
          text='Add Entry'
          Icon={FaPlus}
          onClick={setOpenEntryInterface}
        />
        <div className={styles.entryCounter}>0 entries</div>
      </div>
      {/* END HEADER */}

      {/* INIT SEARCH BAR */}
      <div className={styles.searchBar}>
        <BiSearchAlt2 />
        <input type='search' placeholder='Search for an entry' />
      </div>
      {/* END SEARCH BAR */}

      <Entries entries={entries} />

      {openEntryInterface && <EntryInterface setOpen={setOpenEntryInterface} />}

      <Credits />
    </main>
  )
}

export default BookMain
