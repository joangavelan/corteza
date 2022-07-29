import styles from '@styles/Settings.module.scss'
import settings from '@data/settings'
import Button from './Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { SettingsProps, FormData } from '@models'
import { useRouter } from 'next/router'
import useSelectedBook from '@zustand/useSelectedBook'
import BookPreview from './BookPreview'

const Settings = ({
  conditionalFields,
  title,
  description,
  setOpenSettings
}: SettingsProps) => {
  const selectedBook = useSelectedBook((state) => state.selectedBook)

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  const { pathname, push } = useRouter()

  const noSubmitFn = () => {
    // if user is located on the home page
    if (pathname === '/') {
      // if the selected book already has values for the 2 required fields the user can skip the form and go to the tracking page
      if (selectedBook?.title && selectedBook?.pageCount) {
        setOpenSettings(false)
        push(`tracking/${selectedBook?.title}`)
      }
      // otherwise the user can't skip the form and must fill out and submit at least the 2 required fields, the trigger() function will display the error messages for the required fields
      else {
        trigger()
      }
    }
    // if user is located on the tracking page just close the modal
    else {
      setOpenSettings(false)
    }
  }

  return (
    <div className={styles.container}>
      {/* heading */}
      <div className={styles.heading}>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      {/* book preview */}
      {pathname === '/' && (
        <BookPreview
          title={selectedBook?.title!}
          author={selectedBook?.author ?? watch('author')}
          imgURL={selectedBook?.imgURL ?? watch('imgURL')}
          rating={selectedBook?.rating ?? watch('rating')}
        />
      )}
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* settings */}
        {(conditionalFields
          ? settings.filter((setting) => conditionalFields.includes(setting.id))
          : settings
        ).map(({ id, label, placeholder, required, type, validate }) => (
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
                required: {
                  value: required,
                  message: 'this field is required'
                },
                validate
              })}
              className={
                // if the input contains a valid value or has an error
                !!watch(id)?.trim() || errors[id]
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
        ))}
        {/* action buttons */}
        <div className={styles.buttons}>
          <Button
            type='button'
            text={pathname === '/' ? 'SKIP FOR NOW' : 'DISCARD CHANGES'}
            color='dark'
            size='small'
            onClick={noSubmitFn}
          />
          <Button
            type='submit'
            text={pathname === '/' ? 'SAVE & CONTINUE' : 'SAVE'}
            color='light'
            size='small'
          />
        </div>
      </form>
    </div>
  )
}

export default Settings
