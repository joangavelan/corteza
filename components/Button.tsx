import React from 'react'
import styles from '@styles/Button.module.scss'
import { ButtonProps } from '@models'

const Button = ({ text, type, Icon, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {text}
      {Icon && <Icon className={styles.icon} />}
    </button>
  )
}

export default Button
