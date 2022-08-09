import styles from '@styles/Modal.module.scss'
import { useClickAwayListener } from '@hooks'

interface ModalProps {
  children: React.ReactNode
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ children, setOpen }: ModalProps) => {
  const closeModal = () => {
    setOpen(false)
  }
  const modalContentRef = useClickAwayListener<HTMLDivElement>(closeModal)

  return (
    <div className={styles.container}>
      <div className={styles.content} ref={modalContentRef}>
        {children}
      </div>
    </div>
  )
}

export default Modal
