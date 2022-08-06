import React from 'react'
import styles from '@styles/LoadingScreen.module.scss'
import BookLoader from './loaders/BookLoader'

const LoadingScreen = () => {
  return (
    <div className={styles.container}>
      <BookLoader />
    </div>
  )
}

export default LoadingScreen
