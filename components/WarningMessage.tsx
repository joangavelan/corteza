import { useEffect } from 'react'
import useWarningMessage from '@zustand/useWarningMessage'
import styles from '@styles/WarningMessage.module.scss'

const WarningMessage = () => {
  const message = useWarningMessage((state) => state.message)
  const setMessage = useWarningMessage((state) => state.setMessage)

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('')
      }, 3000)
    }
  }, [message, setMessage])

  return (
    <div className={styles.container}>
      <p>{message}</p>
    </div>
  )
}

export default WarningMessage
