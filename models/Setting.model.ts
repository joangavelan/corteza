import { Book } from '@models'

export interface Setting {
  id: keyof Book
  label: string
  type: 'text' | 'number' | 'url'
  placeholder?: string
  required?: boolean
}