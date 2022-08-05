import { useMemo } from 'react'
import styles from '@styles/CircularProgress.module.scss'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import Image from 'next/image'
import { getPercentage } from '@utils'
import { CircularProgressProps } from '@models'

const CircularProgress = ({
  title,
  imgURL,
  currentPage,
  pageCount
}: CircularProgressProps) => {
  const percentage = useMemo(
    () => getPercentage(currentPage, pageCount),
    [currentPage, pageCount]
  )

  return (
    <div className={styles.container}>
      {/* book progress */}
      <CircularProgressbarWithChildren
        value={percentage}
        styles={{
          // Customize the root svg element
          root: {},
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: `rgba(34, 197, 94, 1)`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
            // Customize transition animation
            transition: 'stroke-dashoffset 0.5s ease 0s'
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: '#e2e8f0',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt'
          }
        }}
      >
        <div className={styles.bookProgress}>
          <div className={styles.imageContainer}>
            <Image
              loader={() => imgURL || '/images/book-placeholder.svg'}
              src={imgURL || '/images/book-placeholder.svg'}
              alt={title + 'book cover'}
              layout='fill'
              objectFit='cover'
              blurDataURL='/images/book-placeholder.svg'
              placeholder='blur'
              unoptimized
            />
          </div>
          <div className={styles.stats}>
            <div className={styles.percentage}>{percentage}%</div>
            <div className={styles.pages}>
              <span className={styles.currentPage}>{currentPage}</span>/
              <span className={styles.pageCount}>{pageCount}</span>
            </div>
          </div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  )
}

export default CircularProgress
