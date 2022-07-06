import { ButtonHTMLAttributes } from "react"
import { IconType } from "react-icons"

export interface ButtonProps {
  text: string
  type: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: () => void
  Icon?: IconType
}
