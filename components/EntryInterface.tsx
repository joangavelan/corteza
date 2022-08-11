import Modal from './Modal'
import styles from '@styles/EntryInterface.module.scss'
import Button from './Button'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { preventNonNumericInput } from '@utils'
import { useForm } from 'react-hook-form'
import { EntryInterfaceProps } from '@models'
import { ErrorMessage } from '@hookform/error-message'
import { useEffect } from 'react'

const EntryInterface = ({
  setOpen,
  onSubmit,
  defaultValues = {
    page: '',
    description: '',
    type: 'note'
  }
}: EntryInterfaceProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus
  } = useForm({
    mode: 'onSubmit',
    defaultValues
  })

  useEffect(() => {
    setFocus('description')
  }, [setFocus])

  return (
    <Modal setOpen={setOpen}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {/* first row */}
          <div className={styles.row1}>
            <h2>Entry</h2>
            <div className={styles.inputs}>
              {/* page number input */}
              <input
                type='text'
                placeholder='P°'
                onKeyDown={preventNonNumericInput}
                {...register('page')}
              />
              {/* end page number input */}

              {/* select entry type  */}
              <div className={styles.selectWrapper}>
                <select {...register('type')} className={styles.select}>
                  <option value='note'>note</option>
                  <option value='idea'>idea</option>
                  <option value='quote'>quote</option>
                  <option value='other'>other</option>
                </select>
                <MdOutlineKeyboardArrowDown />
              </div>
              {/* end select entry type */}
            </div>
          </div>
          {/* end first row */}

          {/* second row */}
          <div className={styles.row2}>
            <textarea
              {...register('description', {
                validate: (value) =>
                  !!value?.trim() || 'Description is required'
              })}
              className={styles.textarea}
              cols={30}
              rows={10}
              maxLength={1500}
            ></textarea>
            <ErrorMessage
              errors={errors}
              name='description'
              render={({ message }) => (
                <p className={styles.errorMessage}>{message}</p>
              )}
            />
          </div>
          {/* end second row */}

          {/* third row */}
          <div className={styles.buttons}>
            <Button
              color='dark'
              type='button'
              size='small'
              text='CANCEL'
              onClick={() => setOpen(false)}
            />
            <Button
              color='light'
              type='submit'
              size='small'
              text='SAVE ENTRY'
            />
          </div>
          {/* end third row */}
        </form>
      </div>
    </Modal>
  )
}

export default EntryInterface
