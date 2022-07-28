import styles from '@styles/Settings.module.scss'
import settings from '@data/settings'
import Button from './Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Book } from '@models'
import { ErrorMessage } from '@hookform/error-message'

interface SettingsProps {
  ids: string[]
  title: string
  description?: string
}

type FormData = Partial<Omit<Book, 'id'>>

const Settings = ({ ids, title, description }: SettingsProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  return (
    <div className={styles.container}>
      {/* heading */}
      <div className={styles.heading}>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* settings */}
        {settings.map(
          ({ id, label, placeholder, required, type, validate }) => (
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
          )
        )}
        {/* action buttons */}
        <div className={styles.buttons}>
          <Button type='button' text='SKIP FOR NOW' color='dark' size='small' />
          <Button
            type='submit'
            text='SAVE AND CONTINUE'
            color='light'
            size='small'
          />
        </div>
      </form>
    </div>
  )
}

export default Settings
