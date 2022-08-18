import { BookMetaProps } from '@models'
import React from 'react'
import styles from '@styles/BookMeta.module.scss'
import RatingStars from './RatingStars'
import { BiCategory } from 'react-icons/bi'
import { BsBook } from 'react-icons/bs'
import { FiCalendar } from 'react-icons/fi'

const BookMeta = ({
  title,
  author,
  rating,
  category,
  pageCount,
  publishedYear
}: BookMetaProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.ratingAuthorWrapper}>
        <RatingStars rating={rating} />
        {author && <p className={styles.author}>by {author}</p>}
      </div>
      <div className={styles.dataOfInterest}>
        <div className={styles.item}>
          <BiCategory />
          <span>{category || '-'}</span>
        </div>
        <div className={styles.item}>
          <BsBook />
          <span>{pageCount}</span>
        </div>
        <div className={styles.item}>
          <FiCalendar />
          <span>{publishedYear || '-'}</span>
        </div>
      </div>
    </div>
  )
}

export default React.memo(BookMeta)
