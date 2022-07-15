import React from 'react'
import styles from '@styles/BookSearchResult.module.scss'
import Image from 'next/image'
import RatingStars from './RatingStars'
import { BookSearchResultProps } from '@models'

const BookSearchResult = ({
  imgUrl,
  title,
  rating,
  author
}: BookSearchResultProps) => {
  return (
    <div className={styles.searchResult}>
      <div className={styles.imgContainer}>
        <Image
          src={imgUrl ?? '/images/book-placeholder.svg'}
          alt={title + 'book cover'}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL='/images/book-placeholder.svg'
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.bookTitle}>{title}</h3>
        <div className={styles.meta}>
          <span className={styles.rating}>
            <RatingStars rating={rating ?? 0} />
          </span>
          {author && <span className={styles.author}>by {author}</span>}
        </div>
      </div>
    </div>
  )
}

export default BookSearchResult
