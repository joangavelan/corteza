import React from 'react'
import styles from '@styles/Settings.module.scss'
import fields from '@data/settingsFields.json'
import Button from './Button'

interface SettingsProps {
  ids: string[]
  title: string
  description?: string
}

const Settings = ({ ids, title, description }: SettingsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      <form className={styles.form}>
        {fields.map(({ id, label, placeholder, type, required }) => (
          <div className={styles.field} key={id}>
            <label htmlFor={id}>
              {label}
              {required && <span>*</span>}
            </label>
            <input
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              required={required}
            />
          </div>
        ))}
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
