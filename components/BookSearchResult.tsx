import styles from '@styles/BookSearchResult.module.scss'
import Image from 'next/image'
import RatingStars from './RatingStars'
import { Book } from '@models'
import useSelectedBook from '@zustand/useSelectedBook'
import useSearchQuery from '@zustand/useSearchQuery'

const BookSearchResult = ({ book }: { book: Book }) => {
  const { imgURL, title, rating, author } = book
  const setSelectedBook = useSelectedBook((set) => set.setSelectedBook)
  const setSearchQuery = useSearchQuery((set) => set.setSearchQuery)

  const handleClick = (book: Book) => {
    setSelectedBook(book)
    setSearchQuery('')
  }

  return (
    <div className={styles.searchResult} onClick={() => handleClick(book)}>
      <div className={styles.imgContainer}>
        <Image
          src={imgURL ?? '/images/book-placeholder.svg'}
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
