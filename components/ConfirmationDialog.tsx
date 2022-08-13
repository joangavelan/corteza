import { ConfirmationDialogProps } from '@models'
import React from 'react'
import Button from './Button'
import Modal from './Modal'
import styles from '@styles/ConfirmationDialog.module.scss'

const ConfirmationDialog = ({
  title,
  description,
  setOpen,
  onConfirm
}: ConfirmationDialogProps) => {
  return (
    <Modal setOpen={setOpen}>
      <div className={styles.container}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button
          size='medium'
          color='dark'
          type='button'
          onClick={() => setOpen(false)}
          text='Cancel'
        />
        <Button
          size='medium'
          color='light'
          type='button'
          onClick={onConfirm}
          text='Delete'
        />
      </div>
    </Modal>
  )
}

export default ConfirmationDialog
