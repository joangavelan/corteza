import { BookPreviewProps } from '@models'
import Image from 'next/image'
import styles from '@styles/BookPreview.module.scss'
import RatingStars from './RatingStars'

const BookPreview = ({ title, author, imgUrl, rating }: BookPreviewProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          loader={() => imgUrl || '/images/book-placeholder.svg'}
          src={imgUrl || '/images/book-placeholder.svg'}
          layout='fill'
          alt={title + 'book cover'}
          objectFit='cover'
        />
      </div>
      <div className={styles.meta}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.wrapper}>
          <span className={styles.rating}>
            <RatingStars rating={rating} />
          </span>
          {author && <p className={styles.author}>by {author}</p>}
        </div>
      </div>
    </div>
  )
}

export default BookPreview
