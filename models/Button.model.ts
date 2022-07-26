import { ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface ButtonProps {
  text: string
  type: ButtonHTMLAttributes<HTMLButtonElement>['type']
  color: 'dark' | 'light'
  size: 'small' | 'medium' | 'large'
  onClick?: () => void
  Icon?: IconType
}
