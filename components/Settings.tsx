import React from 'react'
import styles from '@styles/Settings.module.scss'
import fields from '@data/settingsFields.json'
import Button from './Button'

const Settings = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Settings</h2>
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
        <Button type='submit' text='SAVE AND CONTINUE' />
      </form>
    </div>
  )
}

export default Settings
