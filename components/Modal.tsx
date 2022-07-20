import React from 'react'
import styles from '@styles/Modal.module.scss'
import { IoClose } from 'react-icons/io5'

interface ModalProps {
  children: React.ReactNode
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ children, setOpen }: ModalProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
        <div className={styles.icon} onClick={() => setOpen(false)}>
          <IoClose />
        </div>
      </div>
    </div>
  )
}

export default Modal
