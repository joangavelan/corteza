import React from 'react'
import { HeadingProps } from '@models'
import styles from '@styles/Heading.module.scss'

const Heading = ({ variant, title, description }: HeadingProps) => {
  return (
    <div className={styles[variant + 'Heading']}>
      {variant === 'search' ? <h1>{title}</h1> : <h2>{title}</h2>}
      <p>{description}</p>
    </div>
  )
}

export default Heading