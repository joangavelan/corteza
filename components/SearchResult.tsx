import React from 'react'
import styles from '../styles/SearchResult.module.scss'
import Image from 'next/image'
import RatingStars from './RatingStars'
import { SearchResultType } from '../models/SearchResult.model'
import SearchResultLoader from './loaders/SearchResultLoader'

const SearchResult = ({
  imgUrl,
  title,
  rating,
  author,
  loading
}: SearchResultType) => {
  return !loading ? (
    <div className={styles.searchResult}>
      <div className={styles.imgContainer}>
        {imgUrl && (
          <Image
            loader={() => imgUrl}
            src={imgUrl}
            alt='book cover'
            layout='fill'
            objectFit='cover'
            priority
          />
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.bookTitle}>{title}</h3>
        {(rating !== undefined || author) && (
          <div className={styles.meta}>
            {rating !== undefined && (
              <span className={styles.rating}>
                <RatingStars rating={rating} />
              </span>
            )}
            {author && <span className={styles.author}>by {author}</span>}
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className={styles.searchResult}>
      <SearchResultLoader />
    </div>
  )
}

export default SearchResult
