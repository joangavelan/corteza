import { useState } from 'react'
import CircularProgress from '@components/CircularProgress'
import BookMeta from '@components/BookMeta'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import styles from '@styles/Book.module.scss'
import { preventNonNumericInput } from '@utils'
import { useRouter } from 'next/router'
import { SidebarProps } from '@models'
import useBooks from '@zustand/useBooks'
import Settings from '@components/Settings'
import ConfirmationDialog from '@components/ConfirmationDialog'

const Sidebar = ({ book }: SidebarProps) => {
  const [pageControllerNumber, setPageControllerNumber] = useState(10)
  const [openSettings, setOpenSettings] = useState(false)
  const [openBookDeletionDialog, setOpenBookDeletionDialog] = useState(false)
  const addReadPages = useBooks((state) => state.addReadPages)
  const removeReadPages = useBooks((state) => state.removeReadPages)
  const deleteBook = useBooks((state) => state.deleteBook)
  const router = useRouter()

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
        <a onClick={() => setOpenBookDeletionDialog(true)}>Delete This Book</a>
      </footer>
      {/* settings */}
      {openSettings && (
        <Settings
          selectedBook={book}
          setOpenSettings={setOpenSettings}
          title='Book Settings'
        />
      )}
      {/* book deletion dialog */}
      {openBookDeletionDialog && (
        <ConfirmationDialog
          title='Are you sure you want to delete this book?'
          description='All data related to this book will be lost.'
          onConfirm={handleBookDeletion}
          setOpen={setOpenBookDeletionDialog}
        />
      )}
    </aside>
  )
}

export default Sidebar
