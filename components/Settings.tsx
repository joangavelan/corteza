import styles from '@styles/Settings.module.scss'
import settings from '@data/settings'
import Button from './Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { SettingsProps, Book, SettingsData } from '@models'
import { useRouter } from 'next/router'
import useSelectedBook from '@zustand/useSelectedBook'
import BookPreview from './BookPreview'
import { assertValues } from '@utils'
import useBooks from '@zustand/useBooks'

const Settings = ({
  conditionalFields,
  title,
  description,
  setOpenSettings
}: SettingsProps) => {
  const selectedBook = useSelectedBook((state) => state.selectedBook)
  const saveBook = useBooks((state) => state.saveBook)

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })

  const router = useRouter()

  // pre-track settings
  const saveAndContinue: SubmitHandler<SettingsData> = (settingsData) => {
    // complete the book data for the tracking page
    const book: Book = {
      ...selectedBook,
      ...assertValues(settingsData)
    }
    // save the book in the persistent (local storage) global state
    saveBook(book)
    // close the settings modal
    setOpenSettings(false)
    // go to the tracking page
    router.push(`books/${book.slug}`)
  }
  const skipForNow = () => {
    // the book must contain the page count value to be able to skip
    if (selectedBook?.pageCount) {
      saveBook(selectedBook)
      setOpenSettings(false)
      router.push(`books/${selectedBook.slug}`)
    }
    // trigger errors on the required field if user tries to skip
    else {
      trigger()
    }
  }

  // book tracking settings
  const saveChanges: SubmitHandler<SettingsData> = (data) => {}
  const discardChanges = () => {}

  const onSubmit = router.pathname === '/' ? saveAndContinue : saveChanges
  const nonSubmit = router.pathname === '/' ? skipForNow : discardChanges

  const validAuthor = !errors['author'] ? watch('author') : undefined
  const validImgURL = !errors['imgURL'] ? watch('imgURL') : undefined
  const validRating = !errors['rating'] ? watch('rating') : undefined

  return (
    <div className={styles.container}>
      {/* heading */}
      <div className={styles.heading}>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      {/* book preview */}
      {router.pathname === '/' && (
        <BookPreview
          title={selectedBook?.title!}
          author={selectedBook?.author ?? validAuthor}
          imgURL={selectedBook?.imgURL ?? validImgURL}
          rating={selectedBook?.rating ?? validRating}
        />
      )}
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* settings */}
        {(conditionalFields
          ? settings.filter((setting) => conditionalFields.includes(setting.id))
          : settings
        ).map(
          ({ id, label, placeholder, required, pattern, type, validate }) => (
            <div className={styles.field} key={id}>
              <label htmlFor={id}>
                {label}
                {required && <span>*</span>}
              </label>
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(id, {
                  required,
                  pattern,
                  validate
                })}
                className={
                  // if the input contains a valid value or has an error
                  !!watch(id) || errors[id]
                    ? // add the corresponding class
                      errors[id] // if the errors object contains the input id
                      ? styles.invalid // add the invalid class
                      : styles.valid // else add the valid class
                    : '' // else add no class
                }
              />
              <ErrorMessage
                errors={errors}
                name={id}
                render={({ message }) => (
                  <p className={styles.errorMessage}>{message}</p>
                )}
              />
            </div>
          )
        )}
        {/* action buttons */}
        <div className={styles.buttons}>
          <Button
            type='button'
            text={router.pathname === '/' ? 'SKIP FOR NOW' : 'DISCARD CHANGES'}
            color='dark'
            size='small'
            onClick={nonSubmit}
          />
          <Button
            type='submit'
            text={router.pathname === '/' ? 'SAVE & CONTINUE' : 'SAVE CHANGES'}
            color='light'
            size='small'
          />
        </div>
      </form>
    </div>
  )
}

export default Settings
