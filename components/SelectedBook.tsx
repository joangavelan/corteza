import React from 'react'
import { SelectedBookType } from '../models/SelectedBook.model'
import styles from '../styles/SelectedBook.module.scss'
import { IoClose } from 'react-icons/io5'

const SelectedBook = ({ title, author }: SelectedBookType) => {
  return (
    <div className={styles.selectedBook}>
      <p>
        <span className={styles.bookTitle}>{title} </span>
        {author && <span className={styles.bookAuthor}>by {author}</span>}
      </p>
      <div className={styles.removeIcon}>
        <IoClose />
      </div>
    </div>
  )
}

export default SelectedBook
