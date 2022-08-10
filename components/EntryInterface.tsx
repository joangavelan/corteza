import { useEffect, useRef } from 'react'
import Modal from './Modal'
import { Entry } from '@models'
import styles from '@styles/EntryInterface.module.scss'
import Button from './Button'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

interface EntryInterfaceProps {
  entry?: Entry
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EntryInterface = ({ entry, setOpen }: EntryInterfaceProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus()
    }
  }, [])

  return (
    <Modal setOpen={setOpen}>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.row1}>
            <h2>Entry</h2>
            <div className={styles.inputs}>
              <input type='text' placeholder='P°' />
              <div className={styles.selectWrapper}>
                <select name='type' id='selected' className={styles.select}>
                  <option value='note'>note</option>
                  <option value='idea'>idea</option>
                  <option value='quote'>quote</option>
                  <option value='other'>other</option>
                </select>
                <MdOutlineKeyboardArrowDown />
              </div>
            </div>
          </div>
          <div className={styles.row2}>
            <textarea
              ref={textAreaRef}
              className={styles.textarea}
              name='description'
              id='textarea'
              cols={30}
              rows={10}
              maxLength={1500}
            ></textarea>
          </div>
          <div className={styles.buttons}>
            <Button color='dark' type='button' size='small' text='CANCEL' />
            <Button
              color='light'
              type='submit'
              size='small'
              text='SAVE ENTRY'
            />
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default EntryInterface
