import styles from '@styles/Settings.module.scss'
import settings from '@data/settings'
import Button from './Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { SettingsProps, Book, SettingsData } from '@models'
import { useRouter } from 'next/router'
import BookPreview from './BookPreview'
import { assertValues } from '@utils'
import useBooks from '@zustand/useBooks'
import slugify from 'slugify'
import useWarningMessage from '@zustand/useWarningMessage'

const Settings = ({
  conditionalFields,
  title,
  description,
  setOpenSettings,
  selectedBook
}: SettingsProps) => {
  const books = useBooks((state) => state.books)
  const saveBook = useBooks((state) => state.saveBook)
  const updateBook = useBooks((state) => state.updateBook)
  const setWarningMessage = useWarningMessage((state) => state.setMessage)
  const router = useRouter()

  const nonEditableFieldsKeys = ['id', 'slug', 'currentPage', 'entries']
  const editableFields = Object.fromEntries(
    Object.entries(selectedBook)
      .filter(([key]) => !nonEditableFieldsKeys.includes(key))
      .map(([key, value]) => [key, value.toString()])
  )

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    defaultValues: editableFields
  })

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
  const saveChanges: SubmitHandler<SettingsData> = (data) => {
    // if the user tries to change the pageCount for a lower number than the current page he's currently reading at, warn the user and cancel form submission
    if (data.pageCount! < selectedBook.currentPage) {
      setWarningMessage('Page count cannot be less than current page')
      return
      // if the user submits an updated book title, proceed with further validation
    } else if (data.title !== selectedBook.title) {
      // if there is already another book with the same title, warn the user and cancel the form submission
      const bookWithSameTitle = books.find((book) => book.title === data.title)
      if (bookWithSameTitle) {
        setWarningMessage('A book with the same title already exists')
        return
        // otherwise just create a new object with the submitted data plus a new slug based on the new title, update the book and redirect the user to a new URL with the updated slug
      } else {
        const updatedBookFields = {
          ...assertValues(data),
          slug: slugify(data.title!, { lower: true })
        }
        updateBook(selectedBook.id, updatedBookFields)
        setOpenSettings(false)
        router.push(`${updatedBookFields.slug}`)
      }
      // else simply update the book if none of the above precautionary checks were triggered
    } else {
      updateBook(selectedBook.id, { ...assertValues(data) })
      setOpenSettings(false)
    }
  }
  const discardChanges = () => {
    setOpenSettings(false)
  }

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
