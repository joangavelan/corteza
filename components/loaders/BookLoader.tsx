import React from 'react'
import styles from '@styles/BookLoader.module.scss'

const BookLoader = () => {
  return (
    <div>
      <div className={styles.book}>
        <div className={styles.inner}>
          <div className={styles.left}></div>
          <div className={styles.middle}></div>
          <div className={styles.right}></div>
        </div>
        <ul>
          {Array.from(new Array(18)).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BookLoader
