import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im'
import styles from '@styles/RatingStars.module.scss'

interface RatingStarsProps {
  rating: number
}

const RatingStars = ({ rating = 0 }: RatingStarsProps) => {
  const base = Math.floor(rating)
  let decimal = rating - base

  const stars = Array.from(Array(5)).map((_, i) => {
    if (i < base) {
      return 'full'
    } else if (!!decimal) {
      decimal = 0
      return 'half'
    } else {
      return 'empty'
    }
  })

  return (
    <div className={styles.container}>
      {stars.map((e, i) => {
        switch (e) {
          case 'full':
            return <ImStarFull key={i} />
          case 'half':
            return <ImStarHalf key={i} />
          case 'empty':
            return <ImStarEmpty key={i} />
        }
      })}
    </div>
  )
}

export default RatingStars
