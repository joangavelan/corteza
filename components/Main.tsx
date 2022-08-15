import { useState } from 'react'
import Button from '@components/Button'
import styles from '@styles/Book.module.scss'
import { FaPlus } from 'react-icons/fa'
import Entries from './Entries'
import Credits from './Credits'
import AddEntry from './AddEntry'
import { MainProps } from '@models'

const Main = ({ bookId, entriesLength }: MainProps) => {
  const [openAddEntry, setOpenAddEntry] = useState(false)

  return (
    <main className={styles.main}>
      {/* header */}
      <div className={styles.mainHeader}>
        <h2>Entries</h2>
        <Button
          color='light'
          size='small'
          type='button'
          text='Add Entry'
          Icon={FaPlus}
          onClick={setOpenAddEntry}
        />
        <div className={styles.entryCounter}>{entriesLength} entries</div>
      </div>

      {/* entries table */}
      <Entries bookId={bookId} />

      {/* add entry */}
      {openAddEntry && <AddEntry setOpen={setOpenAddEntry} bookId={bookId} />}

      <Credits />
    </main>
  )
}

export default Main
