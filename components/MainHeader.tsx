import { useState } from 'react'
import Button from '@components/Button'
import styles from '@styles/Book.module.scss'
import AddEntry from './AddEntry'
import { FaPlus } from 'react-icons/fa'
import { MainHeaderProps } from '@models'

const MainHeader = ({ entriesLength, bookId }: MainHeaderProps) => {
  const [openAddEntry, setOpenAddEntry] = useState(false)

  return (
    <header className={styles.mainHeader}>
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
      {/* add entry */}
      {openAddEntry && <AddEntry setOpen={setOpenAddEntry} bookId={bookId} />}
    </header>
  )
}

export default MainHeader
