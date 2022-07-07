import React from 'react'
import styles from '@styles/Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.container}>
      <span className={styles.name}>Corteza</span>
      <span className={styles.app}>Book Tracker</span>
    </div>
  )
}

export default Logo
