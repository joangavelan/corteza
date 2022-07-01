import React from 'react'
import styles from '../styles/StartTrackingBtn.module.scss'
import { AiFillCaretRight } from 'react-icons/ai'

const StartTrackingBtn: React.FC = () => {
  return (
    <button className={styles.button}>
      Start Tracking
      <AiFillCaretRight className={styles.icon} />
    </button>
  )
}

export default StartTrackingBtn