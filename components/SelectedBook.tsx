import React from 'react'
import { SelectedBookProps } from '@models'
import styles from '@styles/SelectedBook.module.scss'
import { IoClose } from 'react-icons/io5'

const SelectedBook = ({ title, author }: SelectedBookProps) => {
  return (
    <div className={styles.selectedBook}>
      <div className={styles.meta}>
        <h4 className={styles.bookTitle}>{title} </h4>
        {author && <p className={styles.bookAuthor}>by {author}</p>}
      </div>
      <div className={styles.removeIcon}>
        <IoClose />
      </div>
    </div>
  )
}

export default SelectedBook
