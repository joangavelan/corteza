import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im'

const RatingStars = ({ rating }: { rating: number }) => {
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
    <>
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
    </>
  )
}

export default RatingStars
